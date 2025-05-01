document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the default anchor click behavior

      const targetId = this.getAttribute("href"); // Get the target section ID
      const targetSection = document.querySelector(targetId); // Select the target section

      // Scroll to the target section smoothly
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Mobile menu toggle (optional)
  const menuToggle = document.createElement("button");
  menuToggle.textContent = "Menu";
  menuToggle.style.backgroundColor = "#005f73";
  menuToggle.style.color = "white";
  menuToggle.style.border = "none";
  menuToggle.style.padding = "0.5rem 1rem";
  menuToggle.style.cursor = "pointer";
  document.querySelector("header").prepend(menuToggle);

  menuToggle.addEventListener("click", () => {
    const nav = document.querySelector("nav ul");
    nav.classList.toggle("active");
    nav.style.display = nav.classList.contains("active") ? "block" : "flex";
  });
});
