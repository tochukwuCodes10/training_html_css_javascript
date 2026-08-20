document.addEventListener("DOMContentLoaded", function () {
  //Example of custom events
  const container = document.querySelector(".container");
  console.log("container", container);
  const textDoc = document.querySelector("article textarea");
  textDoc.textContent = "";
  console.log("textDoc", textDoc);

  const customEvt = new CustomEvent("typing", {
    bubbles: true,
    detail: { text: () => textDoc.value },
  });

  // While user inputs data, the input target element dispatches/publishes the custom event.
  // Since the input is dispatching the event and it bubbles up the DOM tree, then only dom nodes
  // directly in the bubble phase can listen for the event. The bubble phase goes from child to parent.
  textDoc.addEventListener("input", function (e) {
    e.target.dispatchEvent(customEvt);
  });

  // Either Parent or child in the bubbling phase can listen for the dispatched event

  // Parent listens
  document.body.addEventListener("typing", (e) => {
    container.textContent = e.detail.text();
  });
  // 1st Child listens
  document.querySelector("article").addEventListener("typing", (e) => {
    container.textContent = e.detail.text();
  });

  // 2nd Child listens
  textDoc.addEventListener("typing", (e) => {
    container.textContent = e.detail.text();
  });
});
