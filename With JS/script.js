// Hamburger Menu Toggle
function hamburg() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('active');
}

// Typewriter Effect
const typewriterText = document.querySelector('.typewriter-text');
const phrases = ["Web Developer", "Tech Enthusiast", "Life long Learner"];
let index = 0;
let charIndex = 0;

function type() {
    if (charIndex < phrases[index].length) {
        typewriterText.innerHTML += phrases[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(deleteText, 1000); // Wait before starting to delete
    }
}

function deleteText() {
    if (charIndex > 0) {
        typewriterText.innerHTML = phrases[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, 50);
    } else {
        index = (index + 1) % phrases.length; // Cycle through phrases
        setTimeout(type, 500); // Wait before typing the next phrase
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".links a");
    
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});

// Start the typewriter effect
type();
