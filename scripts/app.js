// Toggle the mobile menu
const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const navLinks = document.getElementById('nav-links');

mobileMenuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});