const burger = document.querySelector('div.burger');
const nav = document.querySelector('nav');
const ul = document.querySelector('nav ul')

burger.addEventListener("click", function () {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    console.log('dziala');
})

ul.addEventListener("click", function () {
    nav.classList.toggle('active');
})


const btnEtude = document.querySelector('button.etude');
const btnProduction = document.querySelector('button.production');
const btnQuality = document.querySelector('button.quality');
const more_1 = document.querySelector('.more_1');
const more_2 = document.querySelector('.more_2');
const more_3 = document.querySelector('.more_3');
btnEtude.addEventListener('click', function () {
    more_1.classList.remove('more_1');
    btnEtude.classList.add('active');

})

btnProduction.addEventListener('click', function () {
    more_2.classList.remove('more_2');
    btnProduction.classList.add('active');
})

btnQuality.addEventListener('click', function () {
    more_3.classList.remove('more_3');
    btnQuality.classList.add('active');
})

$(document).ready(function () {

    $('a[href^="#"]').on('click', function (event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500);
        }
    });

});