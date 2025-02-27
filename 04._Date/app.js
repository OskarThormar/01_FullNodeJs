const express = require('express');
const app = express();

console.log(new Date()); // UTC

console.log(Date()); // Local date time

console.log(Date.now()); // Epoch (seconds since 1970 Jan 1st)

// assignment: Create a route can /months which returns the currenct month as a response
const months = [
    "Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"
];
console.log(months);

const days = [
    "Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"
];
console.log(days);

app.get("/month/v1", (req, res) => {
    const currentMonth = months[new Date().getMonth()];

    res.send({ data: currentMonth });
});

app.get("/months/v2", (req, res) => {
    const currentMonth = new Date().toLocaleDateString("en-uk", { month: "long" });

    res.send({ data: currentMonth })
});

console.log(Date().split(" ")[1]);

app.get("/months/v3", (req, res) => {
    const currentMonth = new Date().split(" ")[1];

    res.send({ data: currentMonth })
});

let currentMonth = new Date().getMonth;

console.log(currentMonth);

// assignment implement /days that returns the weekday as a word

app.get("/days", (req, res) => {
    const currentDay = days[new Date().getDay()];

    res.send({ data: currentDay });
});


const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));