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
