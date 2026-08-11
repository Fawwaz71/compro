// ==========================================================================
// 1. Theme Configuration Toggler (Dark / Light Mode)
// ==========================================================================
const themeToggleBtn = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Read local settings storage or system preferences on initial load
const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
htmlElement.setAttribute('data-theme', savedTheme);

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// ==========================================================================
// 2. Multilingual State Machine (English / Indonesian Selector Engine)
// ==========================================================================
const langToggleBtn = document.getElementById('langToggle');
let currentLanguage = localStorage.getItem('lang') || 'EN';

function applyLanguage(lang) {
    const processElements = document.querySelectorAll('[data-en][data-id]');
    
    processElements.forEach(el => {
        // Assign value variants checking text node conversions or attributes
        const translationText = lang === 'EN' ? el.getAttribute('data-en') : el.getAttribute('data-id');
        
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = translationText;
        } else {
            el.innerHTML = translationText;
        }
    });

    // Update active label status on switch layout control
    langToggleBtn.textContent = lang === 'EN' ? 'ID' : 'EN';
    localStorage.setItem('lang', lang);
    currentLanguage = lang;
}

// Attach execution hook to selection controllers
langToggleBtn.addEventListener('click', () => {
    const nextTargetLanguage = currentLanguage === 'EN' ? 'ID' : 'EN';
    applyLanguage(nextTargetLanguage);
});

// Run translation validation layer on browser parsing init
applyLanguage(currentLanguage);

// ==========================================================================
// 3. User Scrolling Experience Enhancements
// ==========================================================================
window.addEventListener('scroll', () => {
    const navigationBar = document.getElementById('mainNav');
    if (window.scrollY > 40) {
        navigationBar.style.boxShadow = 'var(--shadow-glass)';
    } else {
        navigationBar.style.boxShadow = 'none';
    }
});

// Scroll Reveal Intersection Observer Initialization Engine
const structuralObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); // Fire target class state updates
        }
    });
}, { threshold: 0.1 });

// Mount node queries into active lifecycle watchers
document.querySelectorAll('.reveal').forEach(el => structuralObserver.observe(el));