// task create a function called getRandomInt that has the parameters
//task min and max and an empty body for now

console.log(getRandomInt(0, 10));

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max + 1 - min) - min);
}

const getRandomIntAnonymousFunction = function (min, max) {
	return Math.floor(Math.random() * (max + 1 - min) - min);
};

const getRandomIntArrowFunction =   (min, max) => {
	return Math.floor(Math.random() * (max + 1 - min) - min);
};

// action er en callback function
// a callback function is a functio nthat is passed a a parameter to another function
// possibly with the aim of calling it later

                        // name: string  action: function
function genericPerformer(name, action) {
	return action(name);
};

//  Lasse coding
const codingAction = (name) => {
    return `${name} likes coding`;
};

console.log(genericPerformer("Lasse", codingAction));

// Andreas sleeping

function sleepingAction(name) {
    return `${name} loves sleeping`;
}

console.log(genericPerformer("Andreas", sleepingAction));

const boxingAction = (name) => { return `${name} owns at boxing`};

console.log(genericPerformer("Tara", boxingAction));


