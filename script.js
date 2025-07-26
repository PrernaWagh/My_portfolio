
// // Mobile Menu Toggle
// const menuToggle = document.querySelector('.menu-toggle');
// const navbarMenu = document.querySelector('.navbar-menu');

// menuToggle.addEventListener('click', function () {
//     // Toggle the 'active' class on the mobile menu
//     navbarMenu.classList.toggle('active');

//     // Change the icon based on menu state
//     const icon = menuToggle.querySelector('i');
//     if (navbarMenu.classList.contains('active')) {
//         icon.classList.remove('ri-menu-line');
//         icon.classList.add('ri-close-line');
//     } else {
//         icon.classList.remove('ri-close-line');
//         icon.classList.add('ri-menu-line');
//     }
// });
// // Smooth Scroll
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
// anchor.addEventListener('click', function(e) {
// e.preventDefault();
// const targetId = this.getAttribute('href');
// const targetElement = document.querySelector(targetId);
// if (targetElement) {
// window.scrollTo({
// top: targetElement.offsetTop - 90,
// behavior: 'smooth'
// });
// }});
// });
// // Close mobile menu when clicking a nav link
// document.querySelectorAll('.navbar-menu .nav-link').forEach(link => {
//     link.addEventListener('click', () => {
//         navbarMenu.classList.remove('active');
//         const icon = menuToggle.querySelector('i');
//         icon.classList.remove('ri-close-line');
//         icon.classList.add('ri-menu-line');
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     // Theme Toggle
//     const themeSwitch = document.querySelector('.theme-switch');
//     const themeSwitchHandle = document.querySelector('.theme-switch-handle');
//     themeSwitch.addEventListener('click', function () {
//         document.body.classList.toggle('dark-mode');

//         // Add/remove particles based on dark mode
//         if (document.body.classList.contains('dark-mode')) {
//             themeSwitchHandle.innerHTML = '<i class="ri-moon-fill ri-lg"></i>';
//             // Create particles
//             const particles = document.createElement('div');
//             particles.className = 'floating-particles';
//             for (let i = 0; i < 7; i++) {
//                 particles.innerHTML += '<div class="particle"></div>';
//             }
//             document.body.appendChild(particles);
//         } else {
//             themeSwitchHandle.innerHTML = '<i class="ri-sun-fill ri-lg"></i>';
//             // Remove particles
//             const particles = document.querySelector('.floating-particles');
//             if (particles) {
//                 particles.remove();
//             }
//         }

//         // Save theme preference to localStorage
//         localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
//     });

//     // Check for saved theme preference on page load
//     if (localStorage.getItem('darkMode') === 'true') {
//         document.body.classList.add('dark-mode');
//         themeSwitchHandle.innerHTML = '<i class="ri-moon-line ri-lg"></i>';
//         // Create particles if dark mode is enabled
//         const particles = document.createElement('div');
//         particles.className = 'floating-particles';
//         for (let i = 0; i < 7; i++) {
//             particles.innerHTML += '<div class="particle"></div>';
//         }
//         document.body.appendChild(particles);
//     }
// });
// // Active Nav Link on Scroll
// const sections = document.querySelectorAll('section');
// const navLinks = document.querySelectorAll('.nav-link');
// window.addEventListener('scroll', function () {
//     let current = '';
//     sections.forEach(section => {
//         const sectionTop = section.offsetTop - 100;
//         const sectionHeight = section.clientHeight;
//         if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
//             current = section.getAttribute('id');
//         }
//     });
//     navLinks.forEach(link => {
//         link.classList.remove('active');
//         if (link.getAttribute('href') === `#${current}`) {
//             link.classList.add('active');
//         }
//     });
// });
// // Back to Top Button
// const backToTopButton = document.querySelector('.back-to-top');
// window.addEventListener('scroll', function () {
//     if (window.pageYOffset > 300) {
//         backToTopButton.classList.add('opacity-100', 'visible');
//         backToTopButton.classList.remove('opacity-0', 'invisible');
//     } else {
//         backToTopButton.classList.remove('opacity-100', 'visible');
//         backToTopButton.classList.add('opacity-0', 'invisible');
//     }
// });
// backToTopButton.addEventListener('click', function () {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// });
// // Typing Effect
// const typingTextElement = document.querySelector('.typing-text');
// const roles = ['Full Stack Developer', 'Web Enthusiast'];
// let roleIndex = 0;
// let charIndex = 0;
// let isDeleting = false;
// let typingDelay = 100;
// function type() {
//     const currentRole = roles[roleIndex];
//     if (isDeleting) {
//         typingTextElement.textContent = currentRole.substring(0, charIndex - 1);
//         charIndex--;
//         typingDelay = 50;
//     } else {
//         typingTextElement.textContent = currentRole.substring(0, charIndex + 1);
//         charIndex++;
//         typingDelay = 150;
//     }
//     if (!isDeleting && charIndex === currentRole.length) {
//         isDeleting = true;
//         typingDelay = 1000;
//     } else if (isDeleting && charIndex === 0) {
//         isDeleting = false;
//         roleIndex = (roleIndex + 1) % roles.length;
//         typingDelay = 500;
//     }
//     setTimeout(type, typingDelay);
// }
// setTimeout(type, 1000);

// document.addEventListener('DOMContentLoaded', function () {
//     // About Tabs
//     const aboutTabs = document.querySelectorAll('.about-tab');
//     const aboutContents = document.querySelectorAll('.about-content');
//     aboutTabs.forEach(tab => {
//         tab.addEventListener('click', function () {
//             const tabId = this.getAttribute('data-tab');
//             aboutTabs.forEach(t => t.classList.remove('active'));
//             aboutContents.forEach(c => c.classList.remove('active'));
//             this.classList.add('active');
//             document.getElementById(tabId).classList.add('active');
//         });
//     });
//     // Skill Progress Animation
//     const skillBars = document.querySelectorAll('.skill-progress');
//     function animateSkills() {
//         skillBars.forEach(bar => {
//             const width = bar.getAttribute('data-width');
//             bar.style.width = width;
//         });
//     }
//     // Project Filtering
//     const projectFilters = document.querySelectorAll('.project-filter');
//     const projectCards = document.querySelectorAll('.project-card');
//     projectFilters.forEach(filter => {
//         filter.addEventListener('click', function () {
//             const category = this.getAttribute('data-filter');
//             projectFilters.forEach(f => f.classList.remove('active', 'bg-primary', 'text-white'));
//             projectFilters.forEach(f => f.classList.add('bg-white', 'border', 'border-gray-200'));
//             this.classList.add('active', 'bg-primary', 'text-white');
//             this.classList.remove('bg-white', 'border', 'border-gray-200');
//             projectCards.forEach(card => {
//                 if (category === 'all' || card.getAttribute('data-category') === category) {
//                     card.style.display = 'block';
//                 } else {
//                     card.style.display = 'none';
//                 }
//             });
//         });
//     });
//     // Certificate Carousel
//     const certCarousel = document.querySelector('.cert-carousel');
//     const certNavPrev = document.querySelector('.cert-nav-prev');
//     const certNavNext = document.querySelector('.cert-nav-next');
//     certNavPrev.addEventListener('click', function () {
//         certCarousel.scrollBy({
//             left: -340,
//             behavior: 'smooth'
//         });
//     });
//     certNavNext.addEventListener('click', function () {
//         certCarousel.scrollBy({
//             left: 340,
//             behavior: 'smooth'
//         });
//     });
//     // Custom Cursor
//     const cursor = document.querySelector('.custom-cursor');
//     document.addEventListener('mousemove', function (e) {
//         cursor.style.left = e.clientX + 'px';
//         cursor.style.top = e.clientY + 'px';
//     });
//     document.addEventListener('mousedown', function () {
//         cursor.classList.add('expand');
//     });
//     document.addEventListener('mouseup', function () {
//         cursor.classList.remove('expand');
//     });
//     // Initialize animations when elements are in viewport
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 if (entry.target.id === 'skills') {
//                     animateSkills();
//                 }
//             }
//         });
//     }, { threshold: 0.5 });
//     aboutContents.forEach(content => {
//         observer.observe(content);
//     });
//     // Contact Form Submission
//     const contactForm = document.querySelector('.contact-form');
//     contactForm.addEventListener('submit', function (e) {
//         e.preventDefault();
//         // Form validation and submission logic would go here
//         alert('Thank you for your message! I will get back to you soon.');
//         contactForm.reset();
//     });
// });


// // Certificate Modal Functionality
// document.addEventListener('DOMContentLoaded', function () {
//     const modal = document.getElementById('certificateModal');
// const modalImg = document.getElementById('modalCertificateImage');
// const closeModal = document.getElementById('closeModal');
// const viewButtons = document.querySelectorAll('.view-certificate');

// viewButtons.forEach(button => {
//     button.addEventListener('click', (e) => {
//         e.preventDefault();
//         const imgSrc = button.getAttribute('data-certificate');
//         modalImg.src = imgSrc;
//         modal.classList.add('active');
//         document.body.style.overflow = 'hidden'; // Prevent scrolling
//     });
// });

// closeModal.addEventListener('click', () => {
//     modal.classList.remove('active');
//     document.body.style.overflow = ''; // Re-enable scrolling
// });

// // Close when clicking outside image
// modal.addEventListener('click', (e) => {
//     if (e.target === modal) {
//         modal.classList.remove('active');
//         document.body.style.overflow = '';
//     }
    
//     });
// });
// document.addEventListener('keydown', (e) => {
//     if (e.key === 'Escape' && modal.classList.contains('active')) {
//         modal.classList.remove('active');
//         document.body.style.overflow = '';
//     }
// });
// Enhanced Navbar Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle - Updated to match your existing structure
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    
    if (menuToggle && navbarMenu) {
        menuToggle.addEventListener('click', function() {
            // Toggle the 'active' class on the mobile menu
            navbarMenu.classList.toggle('active');
            document.body.style.overflow = navbarMenu.classList.contains('active') ? 'hidden' : 'auto';
            
            // Change the icon based on menu state
            const icon = menuToggle.querySelector('i');
            if (navbarMenu.classList.contains('active')) {
                icon.classList.replace('ri-menu-line', 'ri-close-line');
            } else {
                icon.classList.replace('ri-close-line', 'ri-menu-line');
            }
        });

        // Close mobile menu when clicking a nav link
        document.querySelectorAll('.navbar-menu .nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navbarMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
                const icon = menuToggle.querySelector('i');
                icon.classList.replace('ri-close-line', 'ri-menu-line');
            });
        });
    }

    // Smooth Scroll - Updated to work with your offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Skip if it's a dropdown toggle or has special class
            if (this.classList.contains('dropdown-toggle') || this.hasAttribute('data-toggle')) {
                return;
            }
            
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                if (navbarMenu && navbarMenu.classList.contains('active')) {
                    navbarMenu.classList.remove('active');
                    document.body.style.overflow = 'auto';
                    const icon = menuToggle?.querySelector('i');
                    if (icon) icon.classList.replace('ri-close-line', 'ri-menu-line');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 90,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active Nav Link on Scroll - Optimized
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (sections.length && navLinks.length) {
        window.addEventListener('scroll', function() {
            let current = '';
            const scrollPosition = window.pageYOffset + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
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
    }

    // Theme Toggle - Keeping your existing particles functionality
    const themeSwitch = document.querySelector('.theme-switch');
    const themeSwitchHandle = document.querySelector('.theme-switch-handle');
    
    if (themeSwitch && themeSwitchHandle) {
        themeSwitch.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            // Add/remove particles based on dark mode
            if (document.body.classList.contains('dark-mode')) {
                themeSwitchHandle.innerHTML = '<i class="ri-moon-fill ri-lg"></i>';
                // Create particles
                const particles = document.createElement('div');
                particles.className = 'floating-particles';
                for (let i = 0; i < 7; i++) {
                    particles.innerHTML += '<div class="particle"></div>';
                }
                document.body.appendChild(particles);
            } else {
                themeSwitchHandle.innerHTML = '<i class="ri-sun-fill ri-lg"></i>';
                // Remove particles
                const particles = document.querySelector('.floating-particles');
                if (particles) particles.remove();
            }
            
            // Save theme preference
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });

        // Check for saved theme preference on page load
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
            themeSwitchHandle.innerHTML = '<i class="ri-moon-line ri-lg"></i>';
            // Create particles if dark mode is enabled
            const particles = document.createElement('div');
            particles.className = 'floating-particles';
            for (let i = 0; i < 7; i++) {
                particles.innerHTML += '<div class="particle"></div>';
            }
            document.body.appendChild(particles);
        }
    }

    // Rest of your existing code (Back to Top, Typing Effect, etc.) can remain the same
    // ...
});

// Certificate Modal Functionality - Updated with better event handling
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('certificateModal');
    const modalImg = document.getElementById('modalCertificateImage');
    const closeModal = document.getElementById('closeModal');
    const viewButtons = document.querySelectorAll('.view-certificate');

    if (modal && modalImg && closeModal) {
        viewButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const imgSrc = button.getAttribute('data-certificate');
                if (imgSrc) {
                    modalImg.src = imgSrc;
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});



