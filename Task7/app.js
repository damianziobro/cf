(function () {
  const nextBtn = document.querySelector('#next-btn');
  const backBtn = document.querySelector('#back-btn');
  const slides = document.querySelectorAll('.slider__slide');
  let currentSlide = 0;

  slides[currentSlide].style.display = 'block';

  nextBtn.addEventListener('click', event => nextSlide());
  backBtn.addEventListener('click', event => backSlide());

  function nextSlide() {
    slides[currentSlide].style.display = 'none';
    if (currentSlide < slides.length - 1) {
      currentSlide++;
    }

    slides[currentSlide].style.display = 'block';
  }

  function backSlide() {
    slides[currentSlide].style.display = 'none';
    if (currentSlide > 0) {
      currentSlide--;
    }

    slides[currentSlide].style.display = 'block';
  }

  const scrollIntervalId = window.setInterval(scrollSlideAutomatically, 5000);

  function scrollSlideAutomatically() {
    if (currentSlide >= slides.length) {
      window.clearInterval(scrollIntervalId);
    }
    nextSlide();
  }
})();
