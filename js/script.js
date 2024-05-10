/*============= menu bar icon ============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon;onclick = ()=> {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
};




/*============= scroll Section active linkr ============*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
   sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop + 150; // Corrected the calculation here
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
        navlinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        })
    }
   })
}


    /*============= Sticky navbar ============*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);




/*============= remove menu icon navbar when click navbar link (scroll)============*/
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');

/*============= Swiper ============*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });