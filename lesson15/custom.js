const track = document.querySelector('.carousel__track');
const slides =Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
//console.log(slideWidth);


const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);




nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.curretn-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amoumtToMove = nextSlide.style.left;

console.log(currentSlide);
console.log(nextSlide);

    track.style.transform = 'translateX(-' + amoumtToMove + ')';
    currentSlide.classList.remove('current-slide');
    currentSlide.classList.add('current-slide');
})

