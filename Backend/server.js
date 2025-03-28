import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("API Running..."));

app.post("/restregister", (req, res) => { });

app.post("/restlogin", (req, res) => { });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { 
    connectDB(); 
    console.log(`Server running on port ${PORT}`)
});
