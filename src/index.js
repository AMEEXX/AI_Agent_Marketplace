import express from "express"
import dotenv from "dotenv"
import {app} from "./app.js"
dotenv.config()     
app.get("/",(req,res) => {
    res.send("Hello this is my first server for my AI Agent marketplace")
})

app.listen(process.env.PORT,()=>{
    console.log(`The server is listening in the port : ${process.env.PORT}`)
})