const express = require("express");
const app = express();
const port = 8081;
const {connectDB, checkConnected}=require('./db.js')

connectDB()
app.get('/ping' , (req , res)=>{
    res.send("pong");
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})

app.get("/",(req,res)=>{
    if(checkConnected()){
        res.send("MongoDB connection established successfully!")
    }
    else{
        res.send("Connection failed!")
    }
});