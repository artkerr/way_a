// Nav

const navMain = document.querySelector('.main-nav');
const navToggle = navMain.querySelector('.main-nav__toggle');


navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  };
});


// Tabs
const tabslink = document.querySelectorAll('.triggers-list__link');
const content = document.querySelectorAll('.country__item');
const cardItem = document.querySelectorAll('.card-list__item');

const removeActiveClass = () => {
  tabslink.forEach((child) => {
    child.classList.remove('triggers-list__link--active');
  });
  content.forEach((child) => {
    child.classList.remove('country__item--active');
  });
}

tabslink.forEach((item) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    const id = evt.target.getAttribute('href');

    removeActiveClass()

    item.classList.add('triggers-list__link--active');

    document.querySelector(id).classList.add('country__item--active');
  });
});

cardItem.forEach((item) => {
  item.addEventListener('click', (evt) => {

    const id = evt.target.getAttribute('href');

    removeActiveClass()

    tabslink.forEach((item) => {
      if (id === item.getAttribute('href')) {
        item.classList.add('triggers-list__link--active');
      }
    });

    document.querySelector(id).classList.add('country__item--active');
  });
});

// Modal

const countryButton = document.querySelectorAll('.country__btn');
const rateButton = document.querySelectorAll('.rate__btn');
const modal = document.querySelector('.modal');
const closeButton = modal.querySelector('.modal__close');
const buyButton = [];
buyButton.push.apply(buyButton, countryButton)
buyButton.push.apply(buyButton, rateButton)

buyButton.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal--show');
    modal.querySelector('#phone-mod').focus();
  })
})

closeButton.addEventListener ('click', (evt) => {
  evt.preventDefault();
  modal.classList.remove('modal--show');
});

modal.addEventListener ('click', (evt) => {
  if (!evt.target.closest('.modal__wrapper')) {
    if (modal.classList.contains('modal--show')) {
      modal.classList.remove('modal--show');
    };
  };
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    if (modal.classList.contains('modal--show')) {
      modal.classList.remove('modal--show');
    };
  };
});

const modalSuccess = document.querySelector('.modal-success');
const successClose = modalSuccess.querySelector('.modal-success__close');
const modalButton = modal.querySelector('.modal__btn');

modalButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalSuccess.classList.add('modal-success--show');
    modal.classList.remove('modal--show');
})

successClose.addEventListener('click', () => {
  modalSuccess.classList.remove('modal-success--show')
})

modalSuccess.addEventListener ('click', (evt) => {
  if (!evt.target.closest('.modal-success__wrapper')) {
    if (modalSuccess.classList.contains('modal-success--show')) {
      modalSuccess.classList.remove('modal-success--show');
    };
  };
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    if (modalSuccess.classList.contains('modal-success--show')) {
      modalSuccess.classList.remove('modal-success--show');
    };
  };
});
