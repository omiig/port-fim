document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, {
    root: null,
    rootMargin: '-40% 0px -40% 0px', // ajusta "zona" de ativação no meio da tela
    threshold: 0
  });

  sections.forEach(section => observer.observe(section));
});

