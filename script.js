document.addEventListener("DOMContentLoaded", function() {
  // Smooth scroll to the About section
  const learnMoreBtn = document.getElementById("learnMore");
  learnMoreBtn.addEventListener("click", function() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  });

  // Handle contact form submission
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for your message!");
    contactForm.reset();
  });

  // Toggle navigation on mobile
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  navToggle.addEventListener("click", () => {
    // Slide in/out the nav
    nav.classList.toggle("open");
    // Transform hamburger into 'X'
    navToggle.classList.toggle("active");
  });

  // **Close mobile menu after clicking a link**
  const navLinks = document.querySelectorAll(".nav-menu li a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      // Hide the menu
      nav.classList.remove("open");
      // Reset the hamburger to its default state
      navToggle.classList.remove("active");
    });
  });
});