// 1. Mobile Menu Toggle
const burger = document.getElementById('mobileToggle');
const menu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    // Change burger look
    burger.classList.toggle('open');
});

// 2. Close menu when clicking a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

// 3. Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 80) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// 4. Intersection Observer (Fade-in animations)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(element => {
    observer.observe(element);
});
