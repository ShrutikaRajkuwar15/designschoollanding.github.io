const navbar = document.getElementById('navbar');

// Listen for scroll events
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function animateNumber(element, start, end, duration) {
    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const current = Math.min(start + (end - start) * (progress / duration), end);

        element.innerHTML = Math.floor(current);

        if (current < end) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const numberElement = document.getElementById('number');
const numberElement2 = document.getElementById('number2');
const numberElement3 = document.getElementById('number3');


let animated = false; // Track whether the animation has already run

// Scroll event listener
window.addEventListener('scroll', function () {
    if (isInViewport(numberElement) && !animated) {
        animated = true; // Prevent multiple animations
        numberElement.classList.add('visible'); // Make it visible
        animateNumber(numberElement, 200, 5672, 2000); // Start animation from 0 to 5672 over 2000 ms
        animateNumber(numberElement2, 10, 457, 2000); // Start animation from 0 to 5672 over 2000 ms
        animateNumber(numberElement3, 10, 338, 2000); // Start animation from 0 to 5672 over 2000 ms

    }
});

function Submitform(){
    document.getElementById("inputfield1").value = "";
    document.getElementById("inputfield2").value = "";

    document.getElementById("inputfield3").value = "";

}