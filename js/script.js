document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Sticky Header function
    const header = document.querySelector('.header');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    // Initial check
    handleScroll();
    
    // Listen for scroll
    window.addEventListener('scroll', handleScroll);

    // Scroll Animation Observer
    const fadeElements = document.querySelectorAll('.fade-in, .feature-card, .about-text, .about-image, .product-card, .area-row');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Determine if element needs a specific animation class
                if (entry.target.classList.contains('fade-in')) {
                    entry.target.classList.add('visible');
                } else if (!entry.target.style.animation) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        // Prepare elements that don't have .fade-in utility class
        if (!el.classList.contains('fade-in')) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
        }
        observer.observe(el);
    });
});
