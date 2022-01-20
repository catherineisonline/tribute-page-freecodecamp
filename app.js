"use strict";
const myNav = document.querySelector(".navigation");
const myHamburger = document.querySelector(".ham-icon");
const menuItem = document.querySelectorAll(".menu-item");
const hamIcon = document.querySelector(".fa-bars");

console.log(menuItem);

myHamburger.addEventListener("click", function () {
  myNav.classList.toggle("responsive");
  if (myNav.classList.contains("responsive")) {
    hamIcon.classList.remove("fa-bars");
    hamIcon.classList.add("fa-times");
  } else {
    hamIcon.classList.add("fa-bars");
    hamIcon.classList.remove("fa-times");
  }
});

menuItem.forEach(function (e) {
  e.addEventListener("click", function () {
    myNav.classList.remove("responsive");
  });
});
