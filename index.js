document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initSliders();
  initScrollIndicator();
});

/* --- Scroll Animations --- */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Trigger once
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.scroll-reveal');
  revealElements.forEach(el => observer.observe(el));
}

/* --- Slider / Carousel Logic --- */
const sliderState = {};

function initSliders() {
  const sliders = document.querySelectorAll('.slider');
  sliders.forEach(slider => {
    const id = slider.id;
    if (id) {
      showSlide(1, id);
    }
  });
}

window.currentSlide = function(n, sliderId) {
  showSlide(n, sliderId);
};

window.changeSlide = function(direction, sliderId) {
  const currentSlide = sliderState[sliderId] || 1;
  const slider = document.getElementById(sliderId);
  if (!slider) return;

  const slides = slider.getElementsByClassName("slide");
  const totalSlides = slides.length;

  let nextSlide = currentSlide + direction;
  if (nextSlide > totalSlides) nextSlide = 1;
  if (nextSlide < 1) nextSlide = totalSlides;

  showSlide(nextSlide, sliderId);
};

function showSlide(n, sliderId) {
  const slider = document.getElementById(sliderId);
  if (!slider) return;

  const slides = slider.getElementsByClassName("slide");
  const dots = slider.getElementsByClassName("dot");

  if (!slides.length) return;

  if (n > slides.length) n = 1;
  if (n < 1) n = slides.length;

  sliderState[sliderId] = n;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[n - 1].style.display = "block";
  if (dots.length > 0 && dots[n-1]) {
    dots[n - 1].classList.add("active");
  }
}

/* --- Scroll Indicator Visibility --- */
function initScrollIndicator() {
  const scrollIndicator = document.getElementById('scrollIndicator');
  if (!scrollIndicator) return;

  let hasScrolled = false;

  window.addEventListener('scroll', () => {
    if (!hasScrolled && window.scrollY > 10) {
      scrollIndicator.classList.add('hidden');
      hasScrolled = true;
    } else if (hasScrolled && window.scrollY <= 10) {
      scrollIndicator.classList.remove('hidden');
      hasScrolled = false;
    }
  });
}

