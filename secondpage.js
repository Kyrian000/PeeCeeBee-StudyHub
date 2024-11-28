// Solidify navbar on scroll
window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

// show/hide faq answer
const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open')
    })
    const icon = faq.querySelector('.faq-icon i');
  
    faq.addEventListener('click', () => {
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
    });
})

// toggle chevron-down
var swiper = new Swiper(".testimonial-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    // centeredSlides: true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints:{
        640:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    
  });

// Dont understand this yet


// toogle menu

const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
    menu.style.display = "flex"
    menuBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
});

closeBtn.addEventListener('click', () => {
    menu.style.display = "none"
    menuBtn.style.display = "inline-block";
    closeBtn.style.display = "none";

});
