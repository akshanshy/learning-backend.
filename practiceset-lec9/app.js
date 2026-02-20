const express=require('express');

const app=express();

app.use((req,res,next)=>{
    console.log("first middleware " ,req.url,req.method);
    next();
})

app.use((req,res,next)=>{
    console.log("second middleware", req.url , req.method);
   next();  
})

app.get("/",(req,res,next)=>{
    console.log("Handling / for GET", req.url, req.method);
    res.send(`<h1>Hello world</h1>`);
})

app.get("/contact-us",(req,res,next)=>{
    console.log("Handling /contact-us for GET", req.url, req.method);
    res.send(`<h1>please give your details</h1>
        <form action="/contact-us" method="POST">
            <input type="text" name="name" placeholder="enter your name"/>
            <input type="email" name="email" placeholder="enter your email"/>
            <input type="submit"/>
            </form>`);
})
app.post("/contact-us",(req,res,next)=>{
    console.log("Handling /contact-us for POST", req.url, req.method);
    res.send(`<h1>thank you for submitting the form</h1>`); 
})
const PORT=5000;
app.listen(PORT,()=>{
    console.log(`server is running on port http://localhost:${PORT}`);
})