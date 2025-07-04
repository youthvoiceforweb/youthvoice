 function initializeMenuToggle() {
    const toggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (toggle && navMenu) {
      toggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
      });
    }
  }

  // Wait until all content (including includes) is loaded
  document.addEventListener("DOMContentLoaded", function () {
    // Wait a short time for <include> to load
    setTimeout(initializeMenuToggle, 300);
  });

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Change navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-primary');
        navbar.classList.remove('bg-dark');
    } else {
        navbar.classList.add('bg-dark');
        navbar.classList.remove('bg-primary');
    }
});

// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});
