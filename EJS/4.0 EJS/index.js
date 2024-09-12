import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const dateNow = new Date (); // Change time date : Ex: "September 14, 2024 11:13:00"
    const day = dateNow.getDay();

    let type = "a weekday";
    let adv = "it's time to work hard";

    if (day === 0 || day === 6) {
         type = "the weekend";
         adv = "it's time to have some fun";
    
    }

    res.render("index.ejs", {
    dayType: type, 
    advice: adv,
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});