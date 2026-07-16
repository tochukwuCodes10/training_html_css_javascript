# Beginner JavaScript Functions Tasks

## Task 1: Understanding and Calling Functions

### Objective

Learn what a function is and how to call one.

1.  Create a function named `greet`.
2.  Make it print **"Hello, World!"** to the console.
3.  Call the function three times.


function greet() {
    console.log("Hello, World!");
     }
greet();
greet();
greet();

------------------------------------------------------------------------

## Task 2: Function Arguments and Return Values

### Objective

Learn how to pass values into a function and return a result.

1.  Create a function named `addNumbers` that accepts two arguments.
2.  Return the sum of the two numbers.
3.  Call the function with:
    -   `5` and `8`
    -   `20` and `15`
4.  Print each returned value.


function addNumbers(num1, num2) {
    return num1 + num2;
               }
const result1 = addNumbers(5, 8);
console.log(result1);

const result2 = addNumbers(20, 15);
console.log(result2); 

------------------------------------------------------------------------

## Task 3: Function Expressions and Arrow Functions

### Objective

Practice writing functions in different styles.

1.  Create a **function expression** named `multiply` that multiplies
    two numbers.
2.  Create an **arrow function** named `square` that returns the square
    of a number.
3.  Test them with:
    -   `multiply(4, 6)`
    -   `square(7)`


const multiply = function(num1, num2) {
    return num1 * num2;
};

const square = num => num * num;
console.log(multiply(4, 6)); 
console.log(square(7));   

### Bonus Challenge

Create an arrow function called `isEven` that returns `true` if a number
is even, otherwise `false`.

const isEven = num => num % 2 = 0;

console.log(isEven(4));  // Outputs: true
console.log(isEven(7));  // Outputs: false
console.log(isEven(0));  // Outputs: true


## Objectives

## Question 1

What is returned in the text variable?

function sayHello() {
  return "Hello World";
}

let text = sayHello();
A. sayHello
B. Hello World
C. undefined
ANS: B

## Question 2
Which line calls the function?

function test() {
  return 5;
}

let x = test;
let y = test();
A. function test() { }
B. let x = test;
C. let y = test();

ANS: C

## Question 3
In the function below, what are a and b?

function multiply(a, b) {
  return a * b;
}
A. Arguments
B. Parameters
C. Return values
ANS: B

## Question 4
What is the value of x in this example?

function add(a, b) {
  return a + b;
}

x = add(2, 3) * 10;
A. 5
B. 10
C. 50
ANS: C

## Question 5
What value is returned if a function has no return statement?

A. null
B. false
C. undefined
ANS: C

## Question 6
Which type of function can be called before it is defined?

A. Function declaration
B. Function expression
C. Arrow function
ANS: A

## Question 7
Which arrow function is correct?

A. const add = (a, b) => return a + b;
B. const add = a, b => a + b;
C. const add = (a, b) => a + b;

ANS: C
