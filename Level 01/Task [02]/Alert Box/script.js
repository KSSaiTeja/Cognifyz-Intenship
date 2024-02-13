document
  .getElementById("showGreetingButton")
  .addEventListener("click", function () {
    // Get the current hour
    var currentHour = new Date().getHours();

    // Define the greeting message based on the current hour
    var greetingMessage;
    if (currentHour < 12) {
      greetingMessage = "Good morning!";
    } else if (currentHour < 18) {
      greetingMessage = "Good afternoon!";
    } else {
      greetingMessage = "Good evening!";
    }

    // Display the greeting message in an alert box
    alert(greetingMessage);
  });
