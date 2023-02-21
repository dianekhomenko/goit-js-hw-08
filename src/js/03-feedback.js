import { throttle } from 'lodash';
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let savedData;
let parsedData;

updateValues();

form.addEventListener(
  'input',
  throttle(e => {
    e.preventDefault();
    const userData = {
      email: form.elements.email.value,
      message: form.elements.message.value,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    updateValues();
  }, 500)
);

function updateValues() {
  savedData = localStorage.getItem(STORAGE_KEY);
  parsedData = JSON.parse(savedData);

  if (parsedData != null) {
    form.elements.email.value = parsedData.email;
    form.elements.message.value = parsedData.message;
  }
}

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  console.log(parsedData);
  e.currentTarget.reset()
  localStorage.clear();
}