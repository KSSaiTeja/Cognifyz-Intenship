document.getElementById("colorButton").addEventListener("click", function () {
  var button = document.getElementById("colorButton");
  if (button.style.backgroundColor === "red") {
    button.style.backgroundColor = "#007bff"; // Change color back to default
  } else {
    button.style.backgroundColor = "red"; // Change color to red
  }
});
