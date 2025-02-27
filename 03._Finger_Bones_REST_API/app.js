const express = require('express');
const app = express();

app.use(express.json())

const fingerBones = [
    {
        id: 1,
        artistName: "Phalange Knowles"
    },
    {
        id: 2,
        name: "Distal Phalange"
    }
];

let currentID = 2;

let nextID = 3;

app.get("/fingerbones", (req, res) => {
    res.send({ data: fingerBones });
});

app.get("/fingerbones/:id", (req, res) => {
    const selectedFingerBoneID = Number(req.params.id);
    const foundFingerBones = fingerBones.find((fingerBone) => fingerBone.id == req.params.id);

    if (!foundFingerBones) {
        res.status(404).send({ error: `No finger bones found with id ${selectedFingerBoneID}` })
    } else {
        res.status(200).send({ data: foundFingerBones });
    }
});


// prefix increment
console.log(++currentID);
console.log(currentID);

// postfix increment
console.log(currentID++);
console.log(currentID);


app.post("/fingerbones", (req, res) => {
    const newFingerBone = req.body;
    newFingerBone.id = nextID++;

    fingerBones.push(newFingerBone);
    res.send({ data: newFingerBone })
});

app.patch("/fingerbones/:id" , (req, res) => {
    const selectedFingerBoneID = Number(req.params.id);
    const foundFingerBoneIndex = fingerBones.findIndex((fingerBones) => fingerBones.id === selectedFingerBoneID);

    if (foundFingerBoneIndex === -1) {
        res.status(404).send({ error: `No fingerbone with id: ${selectedFingerBoneID}`})
    } else {
        const existingFingerBone = fingerBones[foundFingerBoneIndex];

        const newFingerBone = { ...existingFingerBone, ...req.body, id: existingFingerBone }
        fingerBones.id = existingFingerBone.id;

        res.status(204).send({ data: newFingerBone });
    }   
});

console.log(fingerBones.findIndex((fingerBone) => false));

app.delete("/fingerbones/:id", (req, res) => {
    const selectedFingerBoneID = Number(req.params.id);
    const foundFingerBoneIndex = fingerBones.findIndex((fingerBones) => fingerBones.id === selectedFingerBoneID);

    if (foundFingerBoneIndex === -1) {
        res.status(404).send({ error: `No fingerbone with id: ${selectedFingerBoneID}`})
    } else {
        fingerBones.splice(foundFingerBoneIndex, 1);
        res.status(204).send();
    }    
});




const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log("Error starting the server", error);
        return;
    }
    console.log("Server is running on port", PORT)
});