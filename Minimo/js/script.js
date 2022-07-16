// Custom Scripts

// Burger Menu
function burgerMenu() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const body = document.querySelector('.body');
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      burger.classList.add('active-burger');
      menu.classList.add('active');
      body.classList.add('locked');
    } else {
      burger.classList.remove('active-burger');
      menu.classList.remove('active');
      body.classList.remove('locked');
    }
  })
  // Вот тут мы ставим breakpoint навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 911.98) {
      burger.classList.remove('active-burger');
      menu.classList.remove('active');
      body.classList.remove('locked');
    }
  })
}
burgerMenu();