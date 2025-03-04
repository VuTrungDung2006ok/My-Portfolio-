document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
  
    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove("active"));
      slides[index].classList.add("active");
    }
  
    document.getElementById("prevSlide").addEventListener("click", function () {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
    });
  
    document.getElementById("nextSlide").addEventListener("click", function () {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    });
  
    showSlide(currentSlide);
  });