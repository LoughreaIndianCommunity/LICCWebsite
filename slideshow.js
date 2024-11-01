// Initialize slides for different slideshows
let slidesIndex = {
    diwali: 0,
    navratri: 0,
    diwali2024: 0  // Add initialization for Diwali 2024
};

// Function to show slides
function showSlides(event, indexChange) {
    const slides = document.querySelectorAll(`#${event}Slideshow .slide`);
    slidesIndex[event] = (slidesIndex[event] + indexChange + slides.length) % slides.length;

    // Hide all slides and show the active one
    slides.forEach((slide, i) => {
        slide.style.display = i === slidesIndex[event] ? 'block' : 'none';
    });
}

// Function to change slide on button click
function changeSlide(indexChange, event) {
    showSlides(event, indexChange);
}

// Initialize slides on page load
document.addEventListener("DOMContentLoaded", () => {
    showSlides('diwali', 0);
    showSlides('navratri', 0);
    showSlides('diwali2024', 0);  // Initialize Diwali 2024 slideshow
});
