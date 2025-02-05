const burgerMenu = document.querySelector('.header__mobile-menu');
  const closeButton = document.querySelector('.adaptive__close');
  const adaptiveBurger = document.querySelector('.adaptive__burger');

  burgerMenu.addEventListener('click', () => {
    adaptiveBurger.classList.add('active');
  });

  closeButton.addEventListener('click', () => {
    adaptiveBurger.classList.remove('active');
  });
