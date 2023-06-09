// toggle navbar icon

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// dark-light

const toggleIcon = document.querySelector('.toggle-icon');

toggleIcon.addEventListener('click', () => {
    toggleIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
});

// faqs

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq-icon i');
        if(icon.className === 'bx bx-plus') {
            icon.className = "bx bx-minus"
        } else {
            icon.className = "bx bx-plus";
        }

    })
});

// scroll sections

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

// remove navbar when click navbar link

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};
// typed

const typed = new Typed('.multiple-text', {
    strings: ['Начинающий разработчик', 'Верстальщик', 'Коммуникативный дизайнер', 'Хороший человек'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    // loop: true
});

// swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });