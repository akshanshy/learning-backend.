const express=require('express');

const rootDir=require("../utils/pathutil");

const path=require('path');

const homeroute=express.Router();

homeroute.get("/",(req,res,next)=>{
    console.log("Handling / for GET", req.url, req.method);
    res.sendFile(path.join(rootDir,"views","home.html"));
})

module.exports=homeroute;   