// scripts.js
let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    currentIndex += direction;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    updateSlidePosition();
}

function updateSlidePosition() {
    const slides = document.querySelector('.carousel-inner');
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Optional: Auto slide every 5 seconds
// setInterval(() => {
//     changeSlide(1);
// }, 5000);
