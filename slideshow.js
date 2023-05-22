document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".image-slideshow img");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const indicators = document.querySelectorAll(".slideshow-indicators button");

  let currentIndex = 0;
  let interval;

  function showSlide(index) {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    indicators.forEach((indicator) => {
      indicator.classList.remove("active");
    });

    slides[index].classList.add("active");
    indicators[index].classList.add("active");
  }

  function prevSlide() {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
  }

  function nextSlide() {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
  }

  function jumpToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
  }

  function startSlideshow() {
    interval = setInterval(() => {
      nextSlide();
    }, 5000);
  }

  function stopSlideshow() {
    clearInterval(interval);
  }

  prevBtn.addEventListener("click", () => {
    prevSlide();
    stopSlideshow();
  });

  nextBtn.addEventListener("click", () => {
    nextSlide();
    stopSlideshow();
  });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      jumpToSlide(index);
      stopSlideshow();
    });
  });

  startSlideshow();
});
