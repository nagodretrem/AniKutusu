import express  from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();


app.listen(process.env.PORT, () => {
mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
     })
     .then(() => console.log("Connected to MongoDB"))
     .catch((err) => console.log(err));
});