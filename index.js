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

app.get("/login",(req,res)=>{
    res.render("login");
})
app.get("/create",(req,res)=>{
    res.render("create");
})
app.get("/dashboard",(req,res)=>{
    res.render("dashboard");
})
app.get("/food",(req,res)=>{
    res.render("food");
})
app.get("/chat_bot",(req,res)=>{
    res.render("chat_bot");
})
app.get("/community",(req,res)=>{
    res.render("community");
})
app.get("medication",(req,res)=>{
    res.render("reminders");
})
app.listen(4000,()=>{
    console.log("server started");
})