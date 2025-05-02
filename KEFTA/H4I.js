document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way
    alert("Thank you for contacting us, " + document.getElementById("name").value + "!");
});

//for properties

function navigateToDetails(propertyName) {
  const propertyPages = {
    "Luxury Villa": "luxury-villa.html",
    "Modern Apartment": "modern-apartment.html",
    "Cozy Cottage": "cozy-cottage.html",
    "Beachfront Home": "beachfront-home.html",
    "Urban Penthouse": "urban-penthouse.html",
    "Mountain Retreat": "mountain-retreat.html",
  };

  const page = propertyPages[propertyName];
  if (page) {
    window.location.href = page;
  } else {
    alert("Details page for " + propertyName + " is not available.");
  }
}
