// Wait until all content (including includes) is loaded
document.addEventListener("DOMContentLoaded", function () {
  // --- Menu Toggle ---
  function initializeMenuToggle() {
    const toggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (toggle && navMenu) {
      toggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
      });
    }
  }

  // Wait a short time for <include> to load
  setTimeout(initializeMenuToggle, 300);

  // --- Smooth Scrolling for Anchor Links ---
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  if (anchorLinks.length > 0) {
    anchorLinks.forEach(anchor => {
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
  }

  // --- Change Navbar Background on Scroll ---
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.classList.add('bg-primary');
        navbar.classList.remove('bg-dark');
      } else {
        navbar.classList.add('bg-dark');
        navbar.classList.remove('bg-primary');
      }
    });
  }

  // --- Initialize Bootstrap Tooltips ---
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  if (tooltipTriggerList.length > 0) {
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

  // --- Mobile Menu Close on Link Click ---
  const navLinks = document.querySelectorAll('.navbar-nav > li > a');
  if (navLinks.length > 0) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        }
      });
    });
  }
});
