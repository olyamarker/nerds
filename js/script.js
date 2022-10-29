// Модальное окно
// Подключить min!
const modalLink = document.querySelector('.contacts-button');
const modalPopup = document.querySelector('.modal');
const modalClose = modalPopup.querySelector('.close');
const modalForm = modalPopup.querySelector('form');
const modalName = modalPopup.querySelector('input[name=name]');
const modalEmail = modalPopup.querySelector('input[name=email]');
const modalMessage = modalPopup.querySelector('textarea');

let isStorageSupport = true;
let storageName = '';
let storageEmail = '';

try {
  storageName = localStorage.getItem('name');
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

modalLink.addEventListener('click', function(evt){
  evt.preventDefault();
  modalPopup.classList.remove('hidden');
  modalPopup.classList.add('modal-show');
  modalName.focus();
  if (storageName) {
    modalName.value = storageName;
    modalEmail.focus();
  }
  if (storageEmail) {
    modalEmail.value = storageEmail;
    modalMessage.focus();
  }
});

modalClose.addEventListener('click', function(evt){
  evt.preventDefault();
  modalPopup.classList.add('hidden');
  modalPopup.classList.remove('modal-show');
  modalPopup.classList.remove('modal-error');
});

modalForm.addEventListener('submit', function(evt) {
  if (!modalName.value || !modalEmail.value) {
    evt.preventDefault();
    modalPopup.classList.remove('modal-error');
    modalPopup.offsetWidth = modalPopup.offsetWidth;
    modalPopup.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', modalName.value);
      localStorage.setItem('email', modalEmail.value);
    }
  }
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode == 27) {
    if (!modalPopup.classList.contains('hidden')) {
      evt.preventDefault();
      modalPopup.classList.add('hidden');
      modalPopup.classList.remove('modal-show');
      modalPopup.classList.remove('modal-error');
    }
  }
});

// Слайдер

const slides = document.querySelectorAll('.slide');
const sliderButtons = document.querySelectorAll('.slider-button');
let currentSlide = document.querySelector('.slide-current');
let currentButton = document.querySelector('.slider-button-current');

let addSliderButtonClickHandler = function (sliderButton, slide) {
  sliderButton.addEventListener('click', function() {
    currentSlide.classList.remove('slide-current');
    currentButton.classList.remove('slider-button-current');
    slide.classList.add('slide-current');
    sliderButton.classList.add('slider-button-current');
    currentSlide = slide;
    currentButton = sliderButton;
  })
};

for (let i = 0; i < slides.length; i++) {
  addSliderButtonClickHandler(sliderButtons[i], slides[i]);
}