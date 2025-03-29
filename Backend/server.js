import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import Pusher from "pusher";
import path from "path";
import { fileURLToPath } from "url"; // Required for __dirname in ES Modules

import { PORT } from "./config/env.js"; // Fixed import path
import ngoRouter from "./routes/ngo.routes.js";
import hotelRouter from "./routes/hotels.routes.js";
import volunteerRouter from "./routes/volunteer.route.js";
import Nauthorize from "./middleware/ngo.auth.middleware.js";
import Hauthorize from "./middleware/hotel.auth.middleWare.js";
import arcjetMiddleware from "./middleware/arcjet.middleware.js";

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS Setup - Change "your-frontend.vercel.app" with your actual frontend URL
app.use(
  cors({
    origin: ["http://localhost:5173", "https://your-frontend.vercel.app"], // Allow localhost & deployed frontend
    credentials: true,
  })
);

// Initialize Pusher
const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  useTLS: true,
});

// Routes
app.use("/api/v1/ngo", ngoRouter);
app.use("/api/v1/hotel", hotelRouter);
app.use("/api/v1/volunteer", volunteerRouter);

app.get("/", (req, res) => res.send("Welcome to the backend of FoodBride"));

// Fix missing logic for REST login & register
app.post("/restregister", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: "Registration API coming soon!" });
});

app.post("/restlogin", (req, res) => {
  res.status(200).json({ success: true, message: "Login API coming soon!" });
});

// Serve notification page
app.get("/notification", (req, res) => {
  res.sendFile(path.join(__dirname, "notification.html"));
});

// Pusher Notification Endpoint
app.post("/send-notification", (req, res) => {
  const { message, recipient } = req.body;
  pusher.trigger("notifications", "new-notification", { message, recipient });
  res
    .status(200)
    .json({ success: true, message: "Notification sent successfully" });
});

// Start Server
app.listen(PORT, () => {
  connectDB();
  console.log("MongoDB Connected");
  console.log(`Server running on port ${PORT}`);
});
