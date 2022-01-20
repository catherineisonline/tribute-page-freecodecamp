"use strict";
const myNav = document.querySelector(".navigation");
const myHamburger = document.querySelector(".ham-icon");
const menuItem = document.querySelectorAll(".menu-item");
const hamIcon = document.querySelector(".fa-bars");

console.log(menuItem);
//Icon style toggle
const toggleIcon = function () {
  if (myNav.classList.contains("responsive")) {
    hamIcon.classList.remove("fa-bars");
    hamIcon.classList.add("fa-times");
  } else {
    hamIcon.classList.add("fa-bars");
    hamIcon.classList.remove("fa-times");
  }
};

//Menu toggle by clicking on icon
myHamburger.addEventListener("click", function () {
  myNav.classList.toggle("responsive");
  toggleIcon();
});

//Menu toggle by clicking on menu item
menuItem.forEach(function (e) {
  e.addEventListener("click", function () {
    myNav.classList.remove("responsive");
    toggleIcon();
  });
});
