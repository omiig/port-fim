const animacaoBarraHabilidade = () => {
    const barraHabilidade = document.querySelectorAll('.progresso-habilidade');
    
    barraHabilidade.forEach(barra => {
        const width = barra.getAttribute('data-width');
        barra.setAttribute('width') = width;
    });
};  

// Observer para animações ao scroll
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animar barras de habilidade quando a seção skills ficar visível
            if (entry.target.id === 'habilidades') {
                setTimeout(() => {
                    animacaoBarraHabilidade();
                }, 300);
            }
        }
    });
}, observerOptions);