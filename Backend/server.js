import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { PORT } from "../Backend/config/env.js";
import ngoRouter from "./routes/ngo.routes.js";
import hotelRouter from "./routes/hotels.routes.js";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/v1/ngo", ngoRouter);
app.use("/api/v1/hotel", hotelRouter);
app.use(cors());

app.get("/", (req, res) => res.send("Welcome to backend of foodbride"));

app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);

// Testing
