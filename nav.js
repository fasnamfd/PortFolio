
const menuBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const blurOverlay = document.getElementById('blur');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  blurOverlay.classList.toggle('active');
});

// Close menu when any link is clicked
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    blurOverlay.classList.remove('active');
  });
});

// Close menu when clicking outside
blurOverlay.addEventListener('click', () => {
  menu.classList.remove('active');
  blurOverlay.classList.remove('active');
});
