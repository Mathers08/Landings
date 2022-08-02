// Burger Menu
function burgerMenu() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const info = document.querySelector('.info');
  const body = document.querySelector('.main__body');
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      burger.classList.add('active-burger');
      menu.classList.add('active');
      info.classList.add('active');
      body.classList.add('locked');
    } else {
      burger.classList.remove('active-burger');
      menu.classList.remove('active');
      info.classList.remove('active');
      body.classList.remove('locked');
    }
  })
  // Вот тут мы ставим breakpoint навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 995) {
      burger.classList.remove('active-burger');
      menu.classList.remove('active');
      info.classList.remove('active');
      body.classList.remove('locked');
    }
  })
}
burgerMenu();

// Footer
function textChange() {
  const footerLeftText = document.querySelector('.footer__left-text');
  window.addEventListener('resize', () => {
    if (window.innerWidth < 740) {
      footerLeftText.textContent = 'Производство запасных частей \n' +
        'для грузового коммерческого\n' +
        'транспорта';
    } else {
      footerLeftText.textContent = 'Продажа запасных частей ГАЗ, ВАЗ, ПАЗ, УАЗ, КАМАЗ';
    }
  })
}
textChange();