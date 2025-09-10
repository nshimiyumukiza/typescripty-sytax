import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import studentRouter from "./router/router.js";

const app = express()
app.use(express.json())
app.use("/students",studentRouter)

dotenv.config();

const port = process.env.PORT || 3000;
const db  = process.env.DB
 app.listen(port, () =>{
    console.log(`port is running on ${port} port!`)
 })
 mongoose.connect(db)
 .then(()=>console.log("connection to database succefully!"))
 .catch(() =>console.log("connection to data base be failed!"))