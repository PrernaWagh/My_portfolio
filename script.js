document.addEventListener('DOMContentLoaded', function () {
    // Theme Toggle
const themeSwitch = document.querySelector('.theme-switch');
const themeSwitchHandle = document.querySelector('.theme-switch-handle');
themeSwitch.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    
    // Add/remove particles based on dark mode
    if (document.body.classList.contains('dark-mode')) {
        themeSwitchHandle.innerHTML = '<i class="ri-moon-line ri-sm"></i>';
        // Create particles
        const particles = document.createElement('div');
        particles.className = 'floating-particles';
        for (let i = 0; i < 7; i++) {
            particles.innerHTML += '<div class="particle"></div>';
        }
        document.body.appendChild(particles);
    } else {
        themeSwitchHandle.innerHTML = '<i class="ri-sun-line ri-sm"></i>';
        // Remove particles
        const particles = document.querySelector('.floating-particles');
        if (particles) {
            particles.remove();
        }
    }
    
    // Save theme preference to localStorage
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Check for saved theme preference on page load
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    themeSwitchHandle.innerHTML = '<i class="ri-moon-line ri-sm"></i>';
    // Create particles if dark mode is enabled
    const particles = document.createElement('div');
    particles.className = 'floating-particles';
    for (let i = 0; i < 7; i++) {
        particles.innerHTML += '<div class="particle"></div>';
    }
    document.body.appendChild(particles);
}
    });
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    menuToggle.addEventListener('click', function () {
        navbarMenu.classList.toggle('active');
        if (navbarMenu.classList.contains('active')) {
            menuToggle.innerHTML = '<i class="ri-close-line ri-2x"></i>';
        } else {
            menuToggle.innerHTML = '<i class="ri-menu-line ri-2x"></i>';
        }
    });
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 90,
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                navbarMenu.classList.remove('active');
                menuToggle.innerHTML = '<i class="ri-menu-line ri-2x"></i>';
            }
        });
    });
    // Active Nav Link on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', function () {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    // Back to Top Button
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('opacity-100', 'visible');
            backToTopButton.classList.remove('opacity-0', 'invisible');
        } else {
            backToTopButton.classList.remove('opacity-100', 'visible');
            backToTopButton.classList.add('opacity-0', 'invisible');
        }
    });
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    // Typing Effect
    const typingTextElement = document.querySelector('.typing-text');
    const roles = ['Full Stack Developer', 'Web Enthusiast'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;
    function type() {
        const currentRole = roles[roleIndex];
        if (isDeleting) {
            typingTextElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = 50;
        } else {
            typingTextElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 150;
        }
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingDelay = 1000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingDelay = 500;
        }
        setTimeout(type, typingDelay);
    }
    setTimeout(type, 1000);

document.addEventListener('DOMContentLoaded', function () {
    // About Tabs
    const aboutTabs = document.querySelectorAll('.about-tab');
    const aboutContents = document.querySelectorAll('.about-content');
    aboutTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab');
            aboutTabs.forEach(t => t.classList.remove('active'));
            aboutContents.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    // Skill Progress Animation
    const skillBars = document.querySelectorAll('.skill-progress');
    function animateSkills() {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    }
    // Project Filtering
    const projectFilters = document.querySelectorAll('.project-filter');
    const projectCards = document.querySelectorAll('.project-card');
    projectFilters.forEach(filter => {
        filter.addEventListener('click', function () {
            const category = this.getAttribute('data-filter');
            projectFilters.forEach(f => f.classList.remove('active', 'bg-primary', 'text-white'));
            projectFilters.forEach(f => f.classList.add('bg-white', 'border', 'border-gray-200'));
            this.classList.add('active', 'bg-primary', 'text-white');
            this.classList.remove('bg-white', 'border', 'border-gray-200');
            projectCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    // Certificate Carousel
    const certCarousel = document.querySelector('.cert-carousel');
    const certNavPrev = document.querySelector('.cert-nav-prev');
    const certNavNext = document.querySelector('.cert-nav-next');
    certNavPrev.addEventListener('click', function () {
        certCarousel.scrollBy({
            left: -340,
            behavior: 'smooth'
        });
    });
    certNavNext.addEventListener('click', function () {
        certCarousel.scrollBy({
            left: 340,
            behavior: 'smooth'
        });
    });
    // Custom Cursor
    const cursor = document.querySelector('.custom-cursor');
    document.addEventListener('mousemove', function (e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    document.addEventListener('mousedown', function () {
        cursor.classList.add('expand');
    });
    document.addEventListener('mouseup', function () {
        cursor.classList.remove('expand');
    });
    // Initialize animations when elements are in viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'skills') {
                    animateSkills();
                }
            }
        });
    }, { threshold: 0.5 });
    aboutContents.forEach(content => {
        observer.observe(content);
    });
    // Contact Form Submission
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Form validation and submission logic would go here
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
});