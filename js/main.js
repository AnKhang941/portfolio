// Main JS for general functionality
document.addEventListener('DOMContentLoaded', () => {
    // Include HTML components first
    includeHTML().then(() => {
        // After components are loaded, set up theme toggle
        setupThemeToggle();
    });
});

// Function to include HTML components
function includeHTML() {
    return new Promise((resolve) => {
        const elements = document.querySelectorAll('[data-include]');
        let loadedCount = 0;
        const totalElements = elements.length;

        if (totalElements === 0) {
            resolve();
            return;
        }

        elements.forEach(element => {
            const file = element.getAttribute('data-include');
            fetch(file)
                .then(response => response.text())
                .then(data => {
                    element.innerHTML = data;
                    element.removeAttribute('data-include');
                    loadedCount++;
                    if (loadedCount === totalElements) {
                        resolve();
                    }
                })
                .catch(error => {
                    console.error('Error loading component:', error);
                    loadedCount++;
                    if (loadedCount === totalElements) {
                        resolve();
                    }
                });
        });
    });
}

// Setup theme toggle after components are loaded
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        html.classList.add('dark');
        if (themeToggle) themeToggle.checked = true;
    }

    // Toggle theme
    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            html.classList.toggle('dark');
            const isDark = html.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




