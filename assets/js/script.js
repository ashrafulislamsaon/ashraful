// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Project Filter Functionality
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectGrid = document.querySelector('.works-grid');
    const projects = document.querySelectorAll('.project');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            // Add filtering class to grid for visual effect
            projectGrid.classList.add('filtering');

            // Get the filter category
            const filter = button.getAttribute('data-filter');

            // Use setTimeout to create a smooth transition effect
            setTimeout(() => {
                // Filter projects
                projects.forEach(project => {
                    const category = project.getAttribute('data-category');

                    if (filter === 'all' || category === filter) {
                        project.classList.remove('hidden');
                    } else {
                        project.classList.add('hidden');
                    }
                });

                // Remove filtering class after animation
                projectGrid.classList.remove('filtering');
            }, 300);
        });
    });
});

// Contact Form
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});