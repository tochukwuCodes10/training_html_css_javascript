document.addEventListener("DOMContentLoaded", function () {
  const div = document.querySelector("div");
  div.addEventListener(
    "click",
    function () {
      alert("Div clicked!");
    },
    // { capture: true },
  );
  const myButton = document.getElementById("myButton");
  myButton.addEventListener(
    "click",
    function (event) {
      alert("Button clicked!");
      event.stopPropagation();
    },
    { capture: false },
  );
});
