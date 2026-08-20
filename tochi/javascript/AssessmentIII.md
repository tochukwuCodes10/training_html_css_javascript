Assessment ResultYou, 59 min


Question 1 (Functions)
Explain briefly in one sentence the following concepts with suitable JavaScript examples/illustrations:

* What is a function? 
* Function declaration 
* Function parameters 
* Function arguments 
* Return values

Tochukwu Ibeagwa, 49 min


Function is a reusable block of code basically to perform a specific task
function greet()
console.log('Hello')

Function Declaration is defines a named function using the function Keyword. Correct

Function Parameter also known as (Param) is a named variables listed in the function's definition. Wrong

Function Arguments are the actual values that are passed to the function when it is called. Correct.

Return Values are the data output sent back from the function. Correct
You, 49 min


Question 2 (Function Expressions & Arrow Functions)
Write JavaScript code to demonstrate:

* A function expression 
* An arrow function 

Then briefly explain two differences, each in one sentence, between them and regular function declarations.
Tochukwu Ibeagwa, 45 min


const multiply = function(a, b)
{return a * b;};

const multiply = (a, b) => a * b;
You, 45 min


Question 3 (DOM Manipulation)
Create a webpage containing:

* An empty <div> 
* A button labeled Add Product 

Using JavaScript:

* Create a new <p> element whenever the button is clicked. 
* Set the paragraph text to: “New Product Added”
* Add a CSS class named product-item. 
* Append the paragraph to the <div>.

Tochukwu Ibeagwa, 33 min


const addProductBtn = document.querySelector('button);
const containerDiv = document.querySelector('div');

addProductBtn.addEventListener('click', function() {const newParagraph = document.createElement('p');
newParagraph.textContent = 'New product Added';
newParagraph.classList.add('product-item')

containerDiv. appendChild(newParagraph)})
You, 33 min


Question 4 (DOM Manipulation)
Finally, explain the purpose of each of the following DOM methods:

* document.createElement() 
* element.classList.add() 
* element.appendChild()

Tochukwu Ibeagwa, 28 min


document.createElement(): Creates new HTML element 

element.classList.add(): it is incharge of adding one or more specified CSS class names to an element 

element.appendChild():
it inserts a specified child node as the last child of a parent
You, 27 min


Briefly explain the following methods of handling events:

* HTML Event Attributes 
* Event Handler Properties 
* addEventListener()

Tochukwu Ibeagwa, 22 min


HTML Event Attributes allows Event to be attached directly inline within HTML elements

Event Handler Properties : Events are assigned as properties directly on DOM element

addEventListener() A DOM method that attaches an event listener to an element without overwriting the existing listeners
You, 21 min


1. Which keyword is used to declare a JavaScript function?
A. method
B. function
C. define
D. create
Tochukwu Ibeagwa, 21 min


B
You, 21 min


2. What is the primary purpose of a function?
A. To store data
B. To repeat a block of reusable code
C. To create HTML elements
D. To style a webpage
Tochukwu Ibeagwa, 20 min


B
You, 20 min


3. Which of the following correctly calls the function below?

function greet() {
    console.log("Hello");
}

A.

call greet();

B.

greet;

C.

greet();

D.

function greet();
Tochukwu Ibeagwa, 19 min


C
You, 19 min


4. What is the value inside the parentheses of a function definition called?

function add(a, b) {}

A. Arguments
B. Parameters
C. Variables
D. Objects
Tochukwu Ibeagwa, 18 min


B
You, 18 min


5. Which DOM method selects an element using its ID?
A.

document.querySelectorAll()

B.

document.getElementsByClassName()

C.

document.getElementById()

D.

document.getElementsByTagName()
Tochukwu Ibeagwa, 18 min


C
You, 18 min


6. Which method creates a new HTML element?
A.

document.makeElement()

B.

document.createElement()

C.

document.newElement()

D.

document.buildElement()
Tochukwu Ibeagwa, 17 min


B
You, 17 min


7. Which property changes the text inside an HTML element?
A.

textValue

B.

innerHTML

C.

innerText

D.
Both B and C
Tochukwu Ibeagwa, 17 min


D
You, 17 min


8. Which event occurs when a user clicks a button?
A.

mouseover

B.

keypress

C.

click

D.

submit
Tochukwu Ibeagwa, 16 min


C
You, 16 min


9. Which method is the recommended way to attach an event to an element?
A.

onclick=""

B.

eventListener()

C.

addEventListener()

D.

listen()
Tochukwu Ibeagwa, 15 min


C
You, 15 min


10. What is the purpose of the event object inside an event listener?
A. To create HTML elements
B. To access information about the event that occurred
C. To style CSS
D. To declare variables
Tochukwu Ibeagwa, 15 min


B
You, 9 min


Total score is 13.5/15 Very Good
