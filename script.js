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
