import express from "express";

const app = express();
const port = 3000;
//let bowl = ["apple", "banana", "orange"];

app.get('/', (req, res) => {
    const data={
        title:"EJS Tags",
        seconds:new Date().getSeconds(),
        items: ["apple", "banana","orange"],    //bowl
        htmlContent:"<strong>This is some strong text</strong>"
    }
    res.render("index.ejs",data);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});