/* SAFDAR HUSSAIN WEBSITE JAVASCRIPT */

// LANGUAGE SWITCHER

let currentLanguage = "en";

function toggleLanguage() {

  const elements = document.querySelectorAll("[data-en]");

  if (currentLanguage === "en") {

    currentLanguage = "ur";

    elements.forEach(function(element) {
      element.textContent = element.getAttribute("data-ur");
    });

    document.getElementById("langBtn").textContent = "English";

    document.documentElement.lang = "ur";
    document.documentElement.dir = "rtl";

  } else {

    currentLanguage = "en";

    elements.forEach(function(element) {
      element.textContent = element.getAttribute("data-en");
    });

    document.getElementById("langBtn").textContent = "اردو";

    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";

  }

}

// WELCOME MESSAGE

console.log("Welcome to Safdar Hussain Professional Website!");

// CURRENT YEAR

const year = new Date().getFullYear();

console.log("Website Year: " + year);

// NAVIGATION ACTIVE EFFECT

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {

  link.addEventListener("click", function() {

    navLinks.forEach(function(item) {
      item.style.color = "white";
    });

    link.style.color = "#e5b94b";

  });

});

// WEBSITE LOADED

window.addEventListener("load", function() {
  console.log("Website successfully loaded!");
});
