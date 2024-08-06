let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};


document.querySelector('#info-btn').onclick = () =>{
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop: true,
   grabCursor: true,
   autoplay: {
      delay: 1,
      disableOnInteraction: false,
   },
   speed: 1200,
   effect: 'slide',
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   autoplay: {
      delay: 4000, // Adjust delay (in ms) between slides
      disableOnInteraction: false, // Continue autoplay even when user interacts with the slider
   },
});


var swiper = new Swiper(".reviews-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   autoplay: {
      delay: 1,
      disableOnInteraction: false,
   },
   speed: 12000, // Adjust speed of slide transition (in ms)
   effect: 'slide', // Use slide effect for smooth sliding
   breakpoints: {
      640: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
      991: {
         slidesPerView: 3,
      },
   },
});



var swiper = new Swiper(".logo-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   autoplay: {
      delay: 1,
      disableOnInteraction: false,
   },
   speed: 12000, // Adjust speed of slide transition (in ms)
   effect: 'slide', // Use slide effect for smooth sliding
   breakpoints: {
      450: {
         slidesPerView: 4,
      },
      640: {
         slidesPerView: 5,
      },
      1000: {
         slidesPerView: 6,
      },
   },
});

if (window.console && window.console.firebug) {
    alert("Firebug is running");
    // Redirect or disable certain features
}
