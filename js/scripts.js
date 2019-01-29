const burger = document.querySelector('div.burger');
const nav = document.querySelector('nav');

burger.addEventListener("click", function () {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    console.log('dziala');
})