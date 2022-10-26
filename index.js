const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/categories.json");
const course = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("Language Api Running");
});

app.get("/course-categories", (req, res) => {
  res.send(categories);
});
app.get("/category/:id", (req, res) => {
  const id = req.params.id;
    const category_course = course.filter((l) => l.category_id === id);
    res.send(category_course);
  
});

app.get("/courses", (req, res) => {
  res.send(course);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const selectedLanguage = course.find((l) => l._id === id);
  res.send(selectedLanguage);
});



app.listen(port, () => {
  console.log(`Language Server Running on port ${port}`);
});
