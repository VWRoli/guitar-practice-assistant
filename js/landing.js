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

//? Close drop down menu when an item clicked
navLinkEl.forEach((link) =>
  link.addEventListener('click', function (e) {
    //? Smooth scrolling
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document
      .querySelector(id)
      .scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    //? close mobile nav
    handleToggle();
  })
);
