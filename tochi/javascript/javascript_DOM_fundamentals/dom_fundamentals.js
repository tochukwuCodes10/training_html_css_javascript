document.addEventListener("DOMContentLoaded", () => {
  // HTML <template> is the DOM’s prototype pattern
  const template = document.getElementById("card");

  function makeCard(title, description) {
    const node = template.content.cloneNode(true);
    node.querySelector(".title").textContent = title;
    node.querySelector(".description").textContent = description;
    return node;
  }

  const container = document.querySelector(".container");

  container.append(makeCard("Card 1", "This is my first card"));
});
