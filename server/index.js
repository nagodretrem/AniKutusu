import express  from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => { res.json({ message: ":)" }); });

app.listen(process.env.PORT, () => 
console.log(`Server started on port ${process.env.PORT}`));