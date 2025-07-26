document.addEventListener('DOMContentLoaded', () => {
    // --- Smooth Scrolling Logic ---
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const targetId = link.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- Typewriter Effect Logic ---
    const typewriterElement = document.querySelector('.typewriter-text');
    if (typewriterElement) {
        // The text content for the typewriter effect is now directly in the HTML
        // as a data-attribute, and CSS handles the animation.
        // No complex JS needed here beyond ensuring it's present.
        // The 'data-text' attribute is used by the CSS animation.
        // For a true JS-driven typewriter, you'd iterate characters.
        // Current setup relies on CSS animation of 'width'.
    }

    // --- Dark Mode Toggle Logic ---
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');

            // Optional: Save user preference to localStorage
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });

        // Optional: Apply dark mode on load if previously set
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
        }
    }
});
// Javascript file