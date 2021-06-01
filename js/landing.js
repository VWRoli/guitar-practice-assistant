'use strinct';
//? VARIABLES
const mobileDropdown = document.querySelector('.mobile-dropdown');
const burgerNav = document.querySelector('#burger-icon');
const navLinkEl = document.querySelectorAll('.nav-link');

//? MOBILE NAV
const handleToggle = () => {
  mobileDropdown.classList.toggle('visible');
};
burgerNav.addEventListener('click', handleToggle);

//? Smooth Scroll
const smoothScroll = (e) => {
  e.preventDefault();
  const id = e.target.getAttribute('href');
  const yOffset = -80;
  const element = document.querySelector(id);
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: 'smooth' });
};

navLinkEl.forEach((link) =>
  link.addEventListener('click', function (e) {
    //? Smooth scrolling
    smoothScroll(e);
    //? close mobile nav
    handleToggle();
  })
);
