const express = require("express");
const ejs = require("ejs");
const path = require("path");
const app = express();
const Message = require("./models/message");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/create", (req, res) => {
  res.render("create");
});
app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});
app.get("/food", (req, res) => {
  res.render("food");
});
app.get("/chat_bot", (req, res) => {
  res.render("chat_bot");
});
app.get("/community", (req, res) => {
  try {
    const dummyUser = {
      name: "Sahil", // This matches <%= user.name %> in your script
    };

    const dummyMessages = [
      {
        sender: "Anurag",
        text: "Hey everyone! Just started my recovery journey today.",
        time: "10:30 AM",
      },
      {
        sender: "Sahil",
        text: "Welcome Anurag! Glad to have you here.",
        time: "10:32 AM",
      },
      {
        sender: "Tejas",
        text: "Don't forget to stay hydrated today!",
        time: "11:00 AM",
      },
    ];

    res.render("community", {
      user: dummyUser,
      messages: dummyMessages,
    });
  } catch (error) {
    console.error("Error loading community:", error);
    res.send("Check server console for errors.");
  }
});

app.get("medication", (req, res) => {
  res.render("reminders");
});
app.listen(4000, () => {
  console.log("server started");
});
