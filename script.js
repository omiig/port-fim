/* document.addEventListener("DOMContentLoaded", () => {
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
*/

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const menuMobile = document.querySelector('.menu-mobile');
  const navbarUl = document.querySelector('.navbar ul');

  // Observer para navegação ativa
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
    rootMargin: '-40% 0px -40% 0px',
    threshold: 0
  });

  sections.forEach(section => observer.observe(section));

  // Menu mobile toggle
  if (menuMobile && navbarUl) {
    menuMobile.addEventListener('click', () => {
      navbarUl.classList.toggle('mobile-open');
      
      // Animar hamburguer
      const spans = menuMobile.querySelectorAll('span');
      menuMobile.classList.toggle('active');
      
      if (menuMobile.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // Fechar menu ao clicar em link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navbarUl.classList.remove('mobile-open');
        menuMobile.classList.remove('active');
        
        const spans = menuMobile.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }

  // Scroll suave para links de navegação
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 100; // Compensar altura da navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});

// Adicionar estilos para menu mobile aberto
const style = document.createElement('style');
style.textContent = `
  @media screen and (max-width: 768px) {
    .navbar ul.mobile-open {
      display: flex !important;
      position: fixed;
      top: 70px;
      left: 0;
      width: 100%;
      background-color: var(--bg-barra-lateral);
      border-bottom: 2px solid var(--cor-borda);
      flex-direction: column;
      padding: 1rem 0;
      gap: 1rem;
      z-index: 999;
    }
  }
`;
document.head.appendChild(style);
