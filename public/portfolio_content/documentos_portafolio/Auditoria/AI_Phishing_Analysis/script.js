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
        spot.addEventListener('click', function () {
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
            feedback.textContent = '';
            const toast = document.createElement('div');
            toast.className = 'feedback-toast active';
            const strong = document.createElement('strong');
            strong.textContent = '¡Detectado!';
            toast.appendChild(strong);
            toast.appendChild(document.createElement('br'));
            toast.appendChild(document.createTextNode(text));
            feedback.appendChild(toast);
            setTimeout(() => {
                toast.classList.remove('active');
            }, 5000);
        }
    }

    function allFound() {
        const modal = document.createElement('div');
        modal.className = 'success-modal';
        const content = document.createElement('div');
        content.className = 'modal-content';
        const h2 = document.createElement('h2');
        h2.textContent = '🏆 ¡Eres un Guardián Digital!';
        const p = document.createElement('p');
        p.textContent = 'Has identificado todas las amenazas en este correo. Recuerda aplicar estos ojos críticos en tu día a día.';
        const btn = document.createElement('button');
        btn.className = 'btn';
        btn.textContent = 'Continuar';
        btn.addEventListener('click', () => modal.remove());
        content.appendChild(h2);
        content.appendChild(p);
        content.appendChild(btn);
        modal.appendChild(content);
        document.body.appendChild(modal);
    }
});
