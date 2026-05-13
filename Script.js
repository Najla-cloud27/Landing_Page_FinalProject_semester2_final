document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    // 1. Scroll Effect untuk Navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 35px';
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            navbar.style.padding = '12px 35px';
            navbar.style.background = 'rgba(255, 255, 255, 0.85)';
        }

        // Active Link Highlight
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // 2. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Simple CSS toggle untuk demo mobile
        if(navMenu.classList.contains('active')) {
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '80px';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.background = 'white';
            navMenu.style.padding = '30px';
            navMenu.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        } else {
            navMenu.style.display = 'none';
        }
    });

    // 3. Reveal Animation on Scroll
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    const itemsToAnimate = document.querySelectorAll('.feature-card, .step-card, .hero-content');
    itemsToAnimate.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(40px)';
        item.style.transition = 'all 0.8s ease-out';
        revealObserver.observe(item);
    });
});