document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu functionality
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.querySelector('i').classList.toggle('fa-bars');
        hamburger.querySelector('i').classList.toggle('fa-times');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.querySelector('i').classList.remove('fa-times');
                hamburger.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add current year to footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Intersection Observer for scroll reveal animation
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                // Optional: remove 'active' when out of view if you want repeatable animation
                // entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the item is visible
        rootMargin: '0px 0px -50px 0px' // Start animation 50px before it hits the bottom
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });

    // Simple Contact Form Submission (client-side only)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelector('input[placeholder="Subject"]').value;
            const message = this.querySelector('textarea').value;

            console.log('Contact Form Submitted:');
            console.log(`Name: ${name}`);
            console.log(`Email: ${email}`);
            console.log(`Subject: ${subject}`);
            console.log(`Message: ${message}`);

            alert('Thank you for your message, Harsha will get back to you shortly!');
            this.reset(); // Clear the form
        });
    }
});