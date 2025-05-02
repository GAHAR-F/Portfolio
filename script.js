//for navbar
let ul = document.getElementById("ul");
ul.style.maxHeight = "0px";

function toggleMenu() {
  if (ul.style.maxHeight == "0px") {
    ul.style.maxHeight = "175px";
  } else {
    ul.style.maxHeight = "0px";
  }
}

// for About
var tablink = document.getElementsByClassName("tab-link");
var tabtab = document.getElementsByClassName("tabtab");

function opentab(tabname) {
  for (tab_link of tablink) {
    tab_link.classList.remove("Skill");
  }
  for (tab_tab of tabtab) {
    tab_tab.classList.remove("skl");
  }
  event.currentTarget.classList.add("Skill");
  document.getElementById(tabname).classList.add("skl");
}

// for typed
const selectTyped = document.querySelector(".typed");
if (selectTyped) {
  let typed_strings = selectTyped.getAttribute("data-typed-items");
  typed_strings = typed_strings.split(",");
  new Typed(".typed", {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
  });
}

// for contact form
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const submitButton = form.querySelector('button[type="submit"]');
  const responseMessage = document.getElementById("response-message");

  try {
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    // Create payload object
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    // Add cache-busting parameter
    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbxQVCtQIA1HcmaGH8vQ-M4bq16XXCh8MAYuuIWqBOvqynlZAuyTVHr-NVLsu0qfxXku/exec" +
      "?t=" +
      Date.now();

    const response = await fetch(scriptUrl, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    // Note: With 'no-cors' mode, you won't be able to read the response
    // So we'll assume success if we get any response
    responseMessage.textContent = "✅ Thank you! Your message has been sent.";
    responseMessage.style.color = "green";
    form.reset();
  } catch (error) {
    console.error("Submission error:", error);
    responseMessage.textContent =
      "❌ Error: Failed to send message. Please try again.";
    responseMessage.style.color = "red";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Submit";
  }
});
