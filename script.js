// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Get the button element
    let button = document.getElementById("changeTextBtn");

    // Add event listener to change text when clicked
    button.addEventListener("click", function () {
        document.getElementById("text").textContent = "You clicked the button!";
    });

    console.log("JavaScript file loaded successfully!"); // Debugging message
});
