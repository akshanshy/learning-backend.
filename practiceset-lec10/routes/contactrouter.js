const express=require('express');

const rootDir=require("../utils/pathutil");

const path=require('path');

const contactrouter=express.Router();

contactrouter.get("/contact-us",(req,res,next)=>{
    console.log("Handling /contact-us for GET", req.url, req.method);
    res.sendFile(path.join(rootDir,"views","contact.html"));
})

contactrouter.post("/contact-us",(req,res,next)=>{
    console.log("hello from us");
    console.log(req.body);  
    console.log("Handling /contact-us for POST", req.url, req.method);
    res.sendFile(path.join(rootDir,"views","contactsuccess.html")); 
})
module.exports=contactrouter;