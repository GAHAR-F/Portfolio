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
      "https://script.google.com/macros/s/AKfycbyHwiceYDYBsstM2XjbQ8QH0KkuRNoWDVm76Zaw4IeyGsBBqVzPRk0lm8-dQbSOi-Cl/exec" +
      "?t=" +
      Date.now();

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      mode: "no-cors", // Only if other solutions fail
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const result = await response.json();

    if (result.success) {
      responseMessage.textContent = "✅ Thank you! Your message has been sent.";
      responseMessage.style.color = "green";
      form.reset();
    } else {
      throw new Error(result.message || "❌ Failed to send message");
    }
  } catch (error) {
    console.error("Submission error:", error);
    responseMessage.textContent = `Error: ${error.message}`;
    responseMessage.style.color = "red";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Submit";
  }
});



// document
//   .getElementById("contactForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     const formData = new FormData(this);
//     const data = Object.fromEntries(formData);

//     fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         document.getElementById("response-message").innerText =
//           "Message sent successfully!";
//       })
//       .catch((error) => {
//         document.getElementById("response-message").innerText =
//           "Error sending message.";
//         console.error("Error:", error);
//       });
//   });








// ------------------------------------------------




  // const doPost = (e) => {
  // try {
  //   const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  //   const data = JSON.parse(e.postData.contents);
    
  //   // Get headers if sheet is empty
  //   const headers = sheet.getRange(1, 1, 1, 3).getValues()[0];
  //   if (headers[0] === '') {
  //     sheet.getRange(1, 1, 1, 3).setValues([['Name', 'Email', 'Message']]);
  //   }
    
  //   // Append new row
  //   sheet.appendRow([data.name, data.email, data.message]);
    
  //   // Return success response
  //   return ContentService.createTextOutput(
  //     JSON.stringify({ success: true, message: 'Data saved successfully' })
  //   ).setMimeType(ContentService.MimeType.JSON);
    
  // } catch (error) {
  //   // Return error response
  //   return ContentService.createTextOutput(
  //     JSON.stringify({ success: false, message: error.message })
  //   ).setMimeType(ContentService.MimeType.JSON);
  // }





















// const doPost = (e) => {
//   let response;

//   try {
//     const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
//     let data;

//     // Handle both FormData and JSON content types
//     if (e.postData.type === "application/json") {
//       data = JSON.parse(e.postData.contents);
//     } else {
//       data = e.parameter;
//     }

//     // Get headers
//     const headers = sheet.getRange(1, 1, 1, 3).getValues()[0];
//     if (headers[0] === "") {
//       sheet.getRange(1, 1, 1, 3).setValues([["Name", "Email", "Message"]]);
//     }

//     // Append data
//     sheet.appendRow([data.name, data.email, data.message]);

//     response = {
//       success: true,
//       message: "Data saved successfully",
//     };
//   } catch (error) {
//     response = {
//       success: false,
//       message: error.message,
//     };
//   }

//   // Return CORS-friendly response
//   return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(
//     ContentService.MimeType.JSON
//   );
// };

// // Required for CORS preflight requests
// function doOptions() {
//   return ContentService.createTextOutput()
//     .setMimeType(ContentService.MimeType.JSON)
//     .setContent(
//       JSON.stringify({
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
//         "Access-Control-Allow-Headers": "Content-Type",
//       })
//     );
// }















// // "❌ Failed to send message ✅ Thank you! Your message has been sent.";