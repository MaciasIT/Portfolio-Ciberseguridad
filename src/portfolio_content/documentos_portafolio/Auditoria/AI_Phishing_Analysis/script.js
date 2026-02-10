document.addEventListener('DOMContentLoaded', () => {
    // --- Scroll Reveal Logic ---
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // --- Interactive Phishing Challenge ---
    const hotspots = document.querySelectorAll('.hotspot');
    const feedback = document.getElementById('challenge-feedback');
    const foundCounter = document.getElementById('found-counter');
    let foundCount = 0;
    const totalCount = hotspots.length;

    hotspots.forEach(spot => {
        spot.addEventListener('click', function() {
            if (!this.classList.contains('found')) {
                this.classList.add('found');
                foundCount++;
                updateCounter();
                showFeedback(this.getAttribute('data-explanation'));
                
                if (foundCount === totalCount) {
                    allFound();
                }
            }
        });
    });

    function updateCounter() {
        if (foundCounter) {
            foundCounter.innerText = `${foundCount} / ${totalCount}`;
        }
    }

    function showFeedback(text) {
        if (feedback) {
            feedback.innerHTML = `<div class="feedback-toast active"><strong>¡Detectado!</strong><br>${text}</div>`;
            setTimeout(() => {
                const toast = feedback.querySelector('.feedback-toast');
                if (toast) toast.classList.remove('active');
            }, 5000);
        }
    }

    function allFound() {
        const modal = document.createElement('div');
        modal.className = 'success-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h2>🏆 ¡Eres un Guardián Digital!</h2>
                <p>Has identificado todas las amenazas en este correo. Recuerda aplicar estos ojos críticos en tu día a día.</p>
                <button onclick="this.parentElement.parentElement.remove()" class="btn">Continuar</button>
            </div>
        `;
        document.body.appendChild(modal);
    }
});
