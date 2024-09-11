import express from "express";
const app = express();
const port = 3000;

app.get("/home", (req, res) => {
    res.send("<h1>Home</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>My name is Gen</p>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Us</h1><p>Phone number: 09286304111</p>");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});