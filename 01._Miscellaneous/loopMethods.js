// forEach, map, filter, reduce, findIndex, find

const myNumbers = [1, 2, 3, 4, 5, 6];

// assignment: get a list of double the numbers

myNumbers.map((myNumbers) => myNumbers * 2);

console.log(myNumbers);

const satellites = [
    {
        name: "International Space Station",
        height: 12000
    },
    {
        name: "MIR",
        height: 0
    },
    {
        name: "James Webb",
        height: 27000
    }
];

const newSatelliteHeights = satellites.map((satellite) => {
    if (satellite.name === "MIR") {
        return satellite;
    }
    
    return {
        name: satellite.name,
        height: satellite.height - 3000
    };
});

console.log(newSatelliteHeights);

// const annoyingNumbers = [12.542356, 17.343259];

// annoyingNumbers.reduce();

// assignment: make a list that reacts as many times as above the thumbs up

const listOfReactions = ["thumbs down", "thumbs down", "thumbs down"];

const updatedReactions = listOfReactions.map((reactions) => reactions = "thumbs up");

console.log(updatedReactions);

listOfReactions.forEach((value, index, array) => console.log(index, value, array));



//satellites.reduce((satellites) => satellites.height - 3000)

//console.log(satellites)

