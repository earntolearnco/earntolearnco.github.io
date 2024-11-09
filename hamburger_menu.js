
/* JavaScript for hamburger menu toggle */
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});
