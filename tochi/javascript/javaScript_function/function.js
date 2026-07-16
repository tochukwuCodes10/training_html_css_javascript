
// naming a function
function printMe(){
    console.log("Hello World");
}
printMe();





// Parameters and Arguments
function printValues(name, age) {
    console.log("Name: " + name);
    console.log("Age: " + age);
}
printValues("John", 25);

const printMeAGain = function() {
    console.log("Hello Again!");
}
printMeAGain();

const printValuesAgain = function(name, age) {
    console.log("Name: " + name);
    console.log("Age: " + age);
}
printValuesAgain("Jane", 30);

function greet(name) { 
  console.log("Hello, " + name + "!");
}

greet("Tochi"); 

// returning values from a function
function addNumbers(a, b) {
    return a + b;
}
let result = addNumbers(5, 10);
console.log(result);

function multiplyNumbers(a, b) {
    return a * b;
}
let product = multiplyNumbers(5, 10);
console.log(product);

function divideNumbers(a, b) {
    if (b === 0) {
        console.log("Cannot divide by zero");
        return null;
    }   
}

// Arrow Functions
const add = (a, b) => a + b;
console.log(add(5, 10));


const subtract = (a, b) => {
  return a - b;
};


const square = (n) => n * n;

console.log(subtract(10, 4)); // 6
console.log(square(5));       // 25

function alertWithoutReturn() {
    console.log(1 + 1);
}
let result = alertWithoutReturn();
console.log(result); // undefined



function alertWithReturn() {
    console.log(1 + 1);
    return "Function completed";
}
let result = alertWithReturn();
console.log(result);








