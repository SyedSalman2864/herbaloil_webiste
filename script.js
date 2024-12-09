document.addEventListener('DOMContentLoaded', function () {
    // Main Image Slider
    let currentMainSlide = 0;
    const mainSlides = document.querySelectorAll('.image-slider .slide');

    function showMainSlide(index) {
        mainSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function prevMainSlide() {
        currentMainSlide = (currentMainSlide === 0) ? mainSlides.length - 1 : currentMainSlide - 1;
        showMainSlide(currentMainSlide);
    }

    function nextMainSlide() {
        currentMainSlide = (currentMainSlide === mainSlides.length - 1) ? 0 : currentMainSlide + 1;
        showMainSlide(currentMainSlide);
    }

    document.querySelector('.prev').addEventListener('click', prevMainSlide);
    document.querySelector('.next').addEventListener('click', nextMainSlide);
    showMainSlide(currentMainSlide);

    // Testimonials Slider
    const testimonialSlider = document.querySelector('.testimonials-slider');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentTestimonialIndex = 0;

    function updateTestimonialSlider() {
        const cardWidth = document.querySelector('.testimonial-card').offsetWidth + 20; // Add gap
        const visibleCards = Math.floor(testimonialSlider.parentElement.offsetWidth / cardWidth);
        const maxIndex = testimonialSlider.children.length - visibleCards;

        testimonialSlider.style.transform = `translateX(-${currentTestimonialIndex * cardWidth}px)`;
        prevButton.disabled = currentTestimonialIndex === 0;
        nextButton.disabled = currentTestimonialIndex === maxIndex;
    }

    prevButton.addEventListener('click', () => {
        currentTestimonialIndex = Math.max(currentTestimonialIndex - 1, 0);
        updateTestimonialSlider();
    });

    nextButton.addEventListener('click', () => {
        const cardWidth = document.querySelector('.testimonial-card').offsetWidth + 20;
        const visibleCards = Math.floor(testimonialSlider.parentElement.offsetWidth / cardWidth);
        const maxIndex = testimonialSlider.children.length - visibleCards;

        currentTestimonialIndex = Math.min(currentTestimonialIndex + 1, maxIndex);
        updateTestimonialSlider();
    });

    updateTestimonialSlider();

    // Small Slider
    let currentSmallSlide = 0;
    const smallSlides = document.querySelectorAll('.small-slider .small-slide');

    function showSmallSlide(index) {
        smallSlides.forEach((slide, i) => {
            slide.style.display = i === index ? 'flex' : 'none';
        });
    }

    function prevSmallSlide() {
        currentSmallSlide = (currentSmallSlide === 0) ? smallSlides.length - 1 : currentSmallSlide - 1;
        showSmallSlide(currentSmallSlide);
    }

    function nextSmallSlide() {
        currentSmallSlide = (currentSmallSlide === smallSlides.length - 1) ? 0 : currentSmallSlide + 1;
        showSmallSlide(currentSmallSlide);
    }

    document.querySelector('.small-prev').addEventListener('click', prevSmallSlide);
    document.querySelector('.small-next').addEventListener('click', nextSmallSlide);
    showSmallSlide(currentSmallSlide);
});




const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});
