document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.hero, .skills');
    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    setTimeout(() => {
        elements.forEach(el => {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        });
    }, 100);
});