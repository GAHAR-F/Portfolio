document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way
    alert("Thank you for contacting us, " + document.getElementById("name").value + "!");
});
