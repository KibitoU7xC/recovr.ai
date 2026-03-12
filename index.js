const express=require("express");
const ejs=require("ejs");
const path=require("path");
const app=express();

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.render("home");
})

app.listen(4000,(req,res)=>{
    console.log("server started");
})