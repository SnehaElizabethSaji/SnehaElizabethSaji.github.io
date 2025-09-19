// Utility: observe sections when they enter viewport
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll(".fade-section");

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach(sec => {
    observer.observe(sec);
  });
});
