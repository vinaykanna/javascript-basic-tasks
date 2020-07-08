const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener('click', () => {
  counter++;
  slider();
});
prevBtn.addEventListener('click', () => {
  counter--;
  slider();
});

function slider() {
  if (counter == slides.length) counter = 0;
  if (counter < 0) counter = slides.length - 1;
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
