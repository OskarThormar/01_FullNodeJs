// task create a function called getRandomInt that has the parameters
//task min and max and an empty body for now

console.log(getRandomInt(0, 10));

function getRandomInt(min, max) {
	return Math.flor(Math.random() * (max + 1 - min) - min);
}

const getRandomIntAnonymousFunction = function (min, max) {
	return Math.floor(Math.random() * (max + 1 - min) - min);
};

const getRandomIntArrowFunction =   (min, max) => {
	return Math.floor(Math.random() * (max + 1 - min) - min);
};

function genericPerformer(name, action) {
	return action(name);
}

//  Lasse coding
const codingAction = (name) => `${name} likes coding`;

console.log(genericPerformer("Lasse", condingAction()));



