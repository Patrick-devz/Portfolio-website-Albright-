const typingElement = document.getElementById('typing');
const texts = [
    'I build modern websites and web apps.',
    'I`m still improving my javascript skills.',
    'I create responsive web designs.',
    'I develop interactive web experiences.',
    'I craft pixel-perfect user interfaces.',
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = 60; 
    
    if (!isDeleting && charIndex + 1 === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        typeSpeed = 1000;
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length; 
    }
    
    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', type);



document.addEventListener('DOMContentLoaded', type);

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const header = document.querySelector('header');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const headerHeight = header.offsetHeight + 20;
                const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

