const images = [
  "./img_center1.png",
  "./img_center2.png",
  "./img_center3.png",
  "./img_center4.png",
  "./img_center5.png",
  "./img_center1.png",
  "./img_center2.png",
  "./img_center3.png",
  "./img_center4.png",
  "./img_center5.png"
];

let currentIndex = 0;
const visibleCount = 5;
const track = document.getElementById("slider-track");

// Створюємо всі зображення одразу
images.forEach((src) => {
  const img = document.createElement("img");
  img.src = src;
  track.appendChild(img);
});

function nextImage() {
  currentIndex = (currentIndex + 1) % (images.length - visibleCount + 1);
  const offset = currentIndex * (296 + 24); // ширина + gap
  track.style.transform = `translateX(-${offset}px)`;
}
