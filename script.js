// DOM

let closeBtn = document.querySelector('.fa-times');
let menuBtn = document.querySelector('.fa-bars');
let navLinks = document.querySelector('.nav-links')

// Listener

menuBtn.addEventListener('click', showMenu);
closeBtn.addEventListener('click', hideMneu);

// Functions

function showMenu() {
    navLinks.style.right = '0'
}

function hideMneu() {
    navLinks.style.right = '-200px'
}