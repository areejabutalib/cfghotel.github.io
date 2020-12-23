// Selectors
let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', function () {
    header.classList.toggle('menu-open');
})

// hamburger menu

document.querySelector('.hamburger-menu').
addEventListener('click', function(){
    this.classList.toggle('open')
    this.classList.toggle('closed')
})

// $(document).ready(function() {
//     $('.menu-toggler').on('click', function() {
//         $(this).toggleClass('open');
//         $('.nav').toggleClass('open');
//     });

//     $('.nav .nav-link').on('click', function() {
//         $('.menu-toggler').removeClass('open');
//         $('.nav').removeClass('open');
//     });

//     $('nav a[href*="#"]').on('click', function() {
//         $('html, body').animate( {
//             scrollTop: $($(this).attr('href')).offset().top-100
//         }, 2000);
//     });

    // $('#up').on('click', function() {
    //     $('html, body').animate( {
    //         scrollTop: 0
    //     }, 2000);
    // });

    AOS.init ({
        easing: 'ease',
        duration: 1800,
    });



