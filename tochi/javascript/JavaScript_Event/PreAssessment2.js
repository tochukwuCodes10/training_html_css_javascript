// DOM Fundamentals 10mins

// Using JavaScript, explain how to:

// Select an element by its ID.
// Select all paragraph elements.
// Create a new <li> element.
// Add text to the new element.
// Append it to an existing <ul>.

const myElement = document.getElementById('myId'); // Select an element by its ID
const paragraphs = document.querySelectorAll('p'); // Select all paragraph elements

const newListItem = document.createElement('li'); // Create a new <li> element

newListItem.textContent = 'This is a new list item.'; // Add text to the new element
const myUnorderedList = document.querySelector('ul'); // Select an existing <ul>
myUnorderedList.appendChild(newListItem); // Append it to the existing <ul>

