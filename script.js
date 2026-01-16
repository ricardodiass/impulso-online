// Menu Mobile
document.getElementById('mobileMenu').addEventListener('click', function() {
    document.getElementById('navMenu').classList.toggle('active');
});

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            // Fecha menu mobile se estiver aberto
            document.getElementById('navMenu').classList.remove('active');
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animação ao rolar a página
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observar elementos com classe 'hidden'
document.querySelectorAll('.hidden').forEach(element => {
    observer.observe(element);
});

// Contador regressivo para oferta
function updateTimer() {
    const now = new Date();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);
    
    const timeLeft = endOfDay - now;
    
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    document.getElementById('timer').textContent = 
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Atualizar timer a cada segundo
updateTimer();
setInterval(updateTimer, 1000);

// Efeito no botão de compra
document.getElementById('buyButton').addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
});

document.getElementById('buyButton').addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});

// Simular clique no botão de compra
document.getElementById('buyButton').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Cria um modal de confirmação
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 40px;
        border-radius: 15px;
        max-width: 500px;
        width: 90%;
        text-align: center;
        box-shadow: 0 15px 30px rgba(0,0,0,0.3);
    `;
    
    modalContent.innerHTML = `
        <h2 style="color: var(--dark); margin-bottom: 20px;">Parabéns!</h2>
        <p style="margin-bottom: 20px; color: #666;">Você está a um passo de transformar sua vida financeira!</p>
        <p style="margin-bottom: 30px; color: #666;">Em uma página real, você seria redirecionado para a página de pagamento seguro.</p>
        <button id="closeModal" class="btn">Fechar</button>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Fechar modal
    document.getElementById('closeModal').addEventListener('click', function() {
        document.body.removeChild(modal);
    });
    
    // Fechar modal ao clicar fora
    modal.addEventListener('click', function(e) {
        if(e.target === modal) {
            document.body.removeChild(modal);
        }
    });
});

// Header fixo com efeito de scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if(window.scrollY > 100) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.padding = '20px 0';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Efeito de digitação no título (opcional)
function typeWriterEffect() {
    const title = document.querySelector('.hero h1');
    const originalText = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Inicia após um breve delay
    setTimeout(typeWriter, 500);
}

// Inicia efeito de digitação quando a página carrega
window.addEventListener('load', typeWriterEffect);