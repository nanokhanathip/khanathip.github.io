const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/resume", (req, res) => {
  res.json({
    name: "khanathip Thuennao",
    title: "Fullstack Developer",
    about: "Passionate developer building fullstack web applications using JavaScript, Node.js and modern frontend technologies.",
    skills: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["Node.js", "Express"],
      tools: ["Git", "GitHub", "VS Code"]
    },
    projects: [
      {
        name: "Fullstack Resume",
        description: "Dynamic resume website with REST API backend."
      }
    ],
    contact: {
      email: "nanokhanathip@gmail.com",
      github: "https://github.com/nanokhanathip/khanathip.github.io"
    }
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});