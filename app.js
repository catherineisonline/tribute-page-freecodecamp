'use strict';
const myNav = document.querySelector('.navigation');
const myHamburger =  document.querySelector('.ham-icon');
const menuItem = document.querySelectorAll('.menu-item');

console.log( menuItem);


myHamburger.addEventListener('click', function() {
        myNav.classList.toggle('responsive');
  
});

menuItem.forEach(function(e){
    e.addEventListener('click', function(){
        myNav.classList.remove('responsive');
    })
})


