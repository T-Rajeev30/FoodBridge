import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { connectDB } from "./config/db.js";

import { PORT } from "../Backend/config/env.js";
import ngoRouter from "./routes/ngo.routes.js";
import hotelRouter from "./routes/hotels.routes.js";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/v1/ngo", ngoRouter);
app.use("/api/v1/hotel", hotelRouter);
app.use(cors());

app.get("/", (req, res) => res.send("API Running..."));

app.post("/restregister", (req, res) => { });

app.post("/restlogin", (req, res) => { });
app.get("/", (req, res) => res.send("Welcome to backend of foodbride"));

//const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDB();
    console.log("MongoDB Connected");
    console.log(`Server running on port ${PORT}`);
});


// Testing
