let navMain = document.querySelector('.main-header__wrapper');
let navToggle = document.querySelector('.main-header__toggle');

navMain.classList.remove('main-header--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-header--closed')) {
    navMain.classList.remove('main-header--closed');
    navMain.classList.add('main-header--open');
  } else {
    navMain.classList.add('main-header--closed');
    navMain.classList.remove('main-header--open');
  }
});
