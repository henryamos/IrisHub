// JavaScript for Mobile Menu Toggle

const navToggle = document.querySelector(".nav-toggle");
const navItems = document.querySelector(".navItems");

navToggle.addEventListener("click", () => {
  navItems.classList.toggle("show");
});

// JavaScript for Scrolling Animations
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    { threshold: 0.5 }
  );

  document
    .querySelectorAll(".feature-item, .gallery-item, .footer-title")
    .forEach((item) => {
      observer.observe(item);
    });
});
