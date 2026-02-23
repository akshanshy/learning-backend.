const express=require('express');

const homeroute=require("./routes/homeroute");

const rootDir=require("./utils/pathutil");

const path=require('path');

const contactrouter=require("./routes/contactrouter");


const app=express();

app.use(express.urlencoded());
app.use(homeroute);
app.use(contactrouter);

app.use((req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","404.html"));
})
const PORT=5000;
app.listen(PORT,()=>{
    console.log(`server is running on port http://localhost:${PORT}`);
})