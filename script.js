const navbar = document.querySelector('.navbar');
const buttons = document.querySelectorAll('.navbar a');
const hero = document.querySelector('.hero');

// Scroll effect for navbar background and button color change
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        navbar.classList.add('scroll');
        
        // Change button colors on scroll
        buttons.forEach(button => {
            button.style.color = '#f39c12';
        });

        // Change hero section background on scroll
        hero.style.backgroundImage = "linear-gradient(to bottom, #1abc9c, #16a085)";
    } else {
        navbar.classList.remove('scroll');

        // Reset button colors
        buttons.forEach(button => {
            button.style.color = '';
        });

        // Reset hero background
        hero.style.backgroundImage = "linear-gradient(to bottom, #3498db, #8e44ad)";
    }
});

// Smooth scrolling function
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').substring(1); // Get section ID
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            e.preventDefault();
            window.scrollTo({
                top: targetSection.offsetTop - navbar.offsetHeight, // Adjust for navbar height
                behavior: 'smooth'
            });
        }
    });
});
