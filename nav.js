
$(document).ready(function () {
      $(".text-1").hide().fadeIn(1000);
      $(".text-2").hide().delay(500).fadeIn(1000);
      $(".text-3").hide().delay(1000).fadeIn(1000);
      $(".text-4").hide().delay(1500).fadeIn(1000);

      const roles = ["Full-stack Developer", "Creative Coder", "UI/UX Enthusiast" , 'ML Enthusiast' ];
      let i = 0, j = 0;
      let current = "";
      let isDeleting = false;

      function type() {
        current = roles[i];
        let visibleText = current.substring(0, j);
        $(".typing").text(visibleText);

        if (!isDeleting && j < current.length) {
          j++;
          setTimeout(type, 100);
        } else if (isDeleting && j > 0) {
          j--;
          setTimeout(type, 60);
        } else {
          isDeleting = !isDeleting;
          if (!isDeleting) i = (i + 1) % roles.length;
          setTimeout(type, 1000);
        }
      }

      type();
    });
    function showTab(tabId) {
  const tabs = ['projectTab', 'docTab'];

  tabs.forEach(id => {
    const el = document.getElementById(id);
    el.style.display = (id === tabId) ? 'flex' : 'none';
  });

  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  if (tabId === 'projectTab') {
    buttons[0].classList.add('active');
  } else {
    buttons[1].classList.add('active');
  }
}


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
