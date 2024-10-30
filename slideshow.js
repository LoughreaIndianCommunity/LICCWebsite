// JavaScript for slideshow functionality
function changeSlide(n, slideshowId) {
    const slides = document.querySelectorAll(`#${slideshowId} .slide`);
    let activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains("active"));
    slides[activeIndex].classList.remove("active");
    activeIndex = (activeIndex + n + slides.length) % slides.length;
    slides[activeIndex].classList.add("active");
}
