const express = require('express');
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send({ data: "This is the root route" });
});

app.get("/blablabla", (req, res) => {
    res.send( {data: "blablabla" });
});

app.get("/yourfavoritenumber/:favoriteNumber", (req, res) => {
    console.log(req.params.favoriteNumber)
    res.send({ data: `dit ynglings tal er: ${req.params.favoriteNumber}` });
});


app.get("/favoritethings/:favoriteanimal/:favoriteflower", (req, res) => {
    console.log(req.params.favoriteanimal);
    res.send({ data: `dit ynglings dyr er: ${req.params.favoriteanimal} og din ynglings blomst er: ${req.params.favoriteflower}`})
})

// assignment

app.get("/search", (req, res) => {
    console.log(req.query);
    res.send({ data: `You searched for ${req.query.q}`});
})

app.post("/favoritepoliticians", (req, res) => {
    console.log(req.body);
    res.send({ data: req.body });
});

// http://localhost:8080/search?q=my%20search%20and%20a%20quary

// assignment

app.post("/favoriteplanes", (req, res) => {
    console.log(req.body);
    res.send({ data: 
        "A350 neo"
    })
})

app.get("/welcomepage", (res, req) => {
    res.sendFile('./index.html');
});

console.log(__dirname);





app.listen(8080);