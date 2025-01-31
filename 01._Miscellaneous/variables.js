
const me = {};

me.name = "Oskar";
me.age = "34";

console.log(typeof me.name);

const hobbies = ["coding"];

hobbies.push("cooking", "eating")

console.log(hobbies);

// "" vs ''

console.log("i can compile");
console.log('i can compile');
console.log(`hvem er ${me.name}?`);

// console.log , vs. +

const assignmentDescription = "... and the value is ...";
const value = 4;

console.log(assignmentDescription, value);
console.log("----------");
console.log(assignmentDescription + 4);


