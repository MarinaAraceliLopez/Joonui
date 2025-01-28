const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showNextSlide() {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}

// Cambia de placa cada 3 segundos
setInterval(showNextSlide, 5000);
