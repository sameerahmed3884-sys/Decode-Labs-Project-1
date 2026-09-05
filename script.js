document.addEventListener('DOMContentLoaded', () => {
    
    // 1. CTA Button Interactivity
    const ctaButton = document.querySelector('.cta-btn');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            const originalText = ctaButton.textContent;
            
            ctaButton.textContent = 'Processing...';
            ctaButton.style.backgroundColor = 'var(--ethereal-blue)';
            ctaButton.style.color = 'var(--dark-text)';
            
            setTimeout(() => {
                alert('Welcome to Classic Auto Care! Your appointment request has been received.');
                
                ctaButton.textContent = originalText;
                ctaButton.style.backgroundColor = '';
                ctaButton.style.color = '';
            }, 1000);
        });
    }

    // 2. Smooth Scrolling for Navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Accounting for fixed header height
                const headerOffset = 70;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 3. Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-animate');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden-animate');
    hiddenElements.forEach((el) => observer.observe(el));

});