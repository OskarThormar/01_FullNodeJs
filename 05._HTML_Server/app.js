const express = require('express');
const app = express();

let visitorCount=0;

app.get("/", (req, res) => {


    res.sendFile(__dirname + "/public/frontpage.html");
})

// task create a route /visitorcounts that returns the visitor count

app.get("/visitorcounts", (req, res) => {
    visitorCount++;
    res.send({ data: visitorCount });
});

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log("ERROR");
        return;
    } else {
        console.log("Server is running on port", PORT);
    }
});