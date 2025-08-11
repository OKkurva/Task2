const images = [
  "./img/img_center1.png",
  "./img/img_center2.png",
  "./img/img_center3.png",
  "./img/img_center4.png",
  "./img/img_center5.png",
  "./img/img_center1.png",
  "./img/img_center2.png",
  "./img/img_center3.png",
  "./img/img_center4.png",
  "./img/img_center5.png"
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



const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const headerPart = document.querySelector('.header-part');
const header = document.querySelector('header');

// Функція для переміщення блоку в сайдбар або назад
function moveHeaderPart() {
    if (window.innerWidth <= 1025) {
        if (!sidebar.contains(headerPart)) {
            sidebar.insertBefore(headerPart, sidebar.firstChild);
        }
    } else {
        if (!header.contains(headerPart)) {
            header.insertBefore(headerPart, menuBtn);
        }
    }
}

// При кліку відкривати/закривати сайдбар
menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Викликаємо при завантаженні і зміні розміру
window.addEventListener('load', moveHeaderPart);
window.addEventListener('resize', moveHeaderPart);
