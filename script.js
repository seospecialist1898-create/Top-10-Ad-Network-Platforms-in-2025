// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Nav
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close on link click
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => navMenu.classList.remove('active'));
    });

    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const toggleSlider = document.querySelector('.toggle-slider');
    const sun = document.querySelector('.sun');
    const moon = document.querySelector('.moon');

    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        toggleSlider.style.transform = isDark ? 'translateX(0)' : 'translateX(25px)';
    });

    if (currentTheme === 'dark') {
        toggleSlider.style.transform = 'translateX(25px)';
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            target?.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Parallax Effect (simple)
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroOverlay = document.querySelector('.hero-overlay');
        heroOverlay.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
});