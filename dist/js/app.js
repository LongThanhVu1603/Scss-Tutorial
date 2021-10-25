// Tạo toggle menu

const menuBtn = document.querySelector('.menu-btn');
const burger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item')

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    burger.classList.toggle('open');
    nav.classList.toggle('open');
    navMenu.classList.toggle('open');
    navItems.forEach(item => item.classList.add('open'));
}