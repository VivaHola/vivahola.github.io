let currentSlide = 0;

function showSlide(index) {
    const items = document.querySelectorAll('.carousel-item');
    if (index >= items.length) {
        currentSlide = items.length - 1; // Stay on the last slide
    } else if (index < 0) {
        currentSlide = 0; // Stay on the first slide
    } else {
        currentSlide = index;
    }
    items.forEach((item, i) => {
        item.classList.toggle('active', i === currentSlide);
    });
}

function changeSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const nextSlide = currentSlide + direction;
    if (nextSlide >= 0 && nextSlide < items.length) {
        showSlide(nextSlide);
    }
}

// Initialize first slide
showSlide(currentSlide);
