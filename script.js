// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.section').forEach(section => observer.observe(section));
  
  // Typed.js Hero
  const typed = new Typed('#typed', {
    strings: ["Rou", "a Developer"],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true
  });
  
