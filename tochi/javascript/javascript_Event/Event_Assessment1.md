# Beginner Task: Introduction to HTML Events

## Objective

Learn how HTML events work by using:

- Event Introduction
- Event Attributes
- Event Handlers
- DOM Event Listeners

---

## Task 1: Event Attributes

### Instructions

1. Create a button that displays the text **"Click Me"**.

<button>Click Me</button>

2. When the button is clicked, change the text inside a paragraph from:



```
No button has been clicked.
```

to

```
The button was clicked!
```

> **Hint:** Use the `onclick` HTML attribute.

---


<body>
  <button id="myButton">Click Me</button>
  <p id="message">No button has been clicked.</p>

  <script>
    const button = document.getElementById("myButton");
    const message = document.getElementById("message");

    button.addEventListener("click", function() {
      message.textContent = "The button was clicked!";
    });
  </script>
</body>


## Task 2: Event Handler Function

Instead of writing JavaScript directly inside the HTML attribute:

1. Create a JavaScript function named `showMessage`.
2. Connect the function to the button using the `onclick` attribute.
3. When the button is clicked, change the paragraph text to:

```
Welcome to JavaScript Events!
```

---

<body>
  <button onclick="showMessage()">Click Me</button>
  <p id="message">No button has been clicked.</p>

  <script>
    function showMessage() {
      const message = document.getElementById("message");
      message.textContent = "Welcome to JavaScript Events!";
    }
  </script>
</body>


## Task 3: DOM Event Listener

Remove the `onclick` attribute completely.

Using JavaScript:

1. Select the button with `document.getElementById()`.
2. Attach a click event using `addEventListener()`.
3. Every time the button is clicked:
   - Change the paragraph text.
   - Change the button background color.
   - Change the button text to **"Clicked!"**.

---

<body>
  <button id="myButton">Click Me</button>
  <p id="message">No button has been clicked.</p>

  <script>
    const button = document.getElementById("myButton");
    const message = document.getElementById("message");

    button.addEventListener("click", function() {
      message.textContent = "Welcome to JavaScript Events!";
      button.style.backgroundColor = "green";
      button.textContent = "Clicked!";
    });
  </script>
</body>


## Bonus Challenge ⭐

Create another button labeled **Reset**.

When the Reset button is clicked:

- Change the paragraph back to:

```
No button has been clicked.
```

- Restore the first button's original background color.
- Change its text back to **"Click Me"**.

---


<html>
<body>
  <button id="myButton">Click Me</button>
  <button id="resetButton">Reset</button>
  <p id="message">No button has been clicked.</p>

  <script>
    const button = document.getElementById("myButton");
    const resetButton = document.getElementById("resetButton");
    const message = document.getElementById("message");

    button.addEventListener("click", function() {
      message.textContent = "Welcome to JavaScript Events!";
      button.style.backgroundColor = "green";
      button.textContent = "Clicked!";
    });

    resetButton.addEventListener("click", function() {
      message.textContent = "No button has been clicked.";
      button.style.backgroundColor = "";
      button.textContent = "Click Me";
    });
  </script>
</body>

## Expected Skills

After completing this task, you should understand:

- What an event is.
- How HTML event attributes work.
- How to create event handler functions.
- How to attach events using `addEventListener()`.
- Why separating HTML and JavaScript using event listeners is considered best practice.
