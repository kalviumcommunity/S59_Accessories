const express = require("express");
const mongoose = require('mongoose');
require("dotenv").config();
const app = express();
const port = 8081;

app.get('/ping' , (req , res)=>{
    res.send("pong");
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})

app.get('/home',(req,res)=>{
    mongoose.connect(process.env.URI)
    .then(()=>{
        console.log("connected to mongoDB")
    })
    .catch((err)=>{
        console.error(err)
    })
    const dbStatus = mongoose.connection ? "connected" : "Disconnected";
    res.send(`Database Connection Status: ${dbStatus}`);
})