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

// Form validation for contact page
if (document.getElementById('contactForm')) {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            event.preventDefault();
            alert('Please fill in all required fields.');
            return false;
        }
        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            event.preventDefault();
            alert('Please enter a valid email address.');
            return false;
        }
    });
}

// Mobile menu close on click
document.querySelectorAll('.navbar-nav>li>a').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the form elements
    const form = this;
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Change button text to indicate processing
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';
    
    // Send the email
    emailjs.sendForm('service_mmk1p1p', 'template_59lsz1v', form)
        .then(function(response) {
            // Success message
            alert('Thank you! Your message has been sent successfully.');
            form.reset();
            submitBtn.innerHTML = 'Message Sent!';
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Send Message';
            }, 3000);
        }, function(error) {
            // Error message
            alert('Oops! Something went wrong. Please try again later.');
            console.error('EmailJS Error:', error);
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Send Message';
        });
});
