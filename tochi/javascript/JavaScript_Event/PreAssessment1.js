// Event listeners 15mins

// Create a webpage containing:

// A button
// A paragraph

// Using addEventListener():

// Change the paragraph text when the button is clicked.
// Change the button background color.
// Log a message to the browser console.

// Explain each step of your solution.

const button = document.createElement('button');
button.textContent = 'Click Me';
const paragraph = document.createElement('p');
paragraph.textContent = 'This is a paragraph.';

document .body.appendChild(button);
document.body.appendChild(paragraph);

button.addEventListener('click', () => {
    paragraph.textContent = 'The button was clicked!';
    button.style.backgroundColor = 'lightblue';
    console.log('Button was clicked!');
});
button.style.backgroundColor = 'lightgray';
console.log('button clicked');