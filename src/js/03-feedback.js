/*
3. Під час сабміту форми очищуй сховище, 
а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.

4. Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. 
Для цього додай до проекту і використовуй бібліотеку lodash.throttle.
*/

const form = document.querySelector('.feedback-form');

form.addEventListener('input', saveMessage);

updateValues();

function saveMessage(evt) {
  evt.preventDefault();
  const userData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}

function updateValues() {
    const savedData = localStorage.getItem('feedback-form-state');
    const parsedData = JSON.parse(savedData)
    
    form.elements.email.value = parsedData.email;
    form.elements.message.value = parsedData.message;
}

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    form.elements.email.value = '';
    form.elements.message.value = '';
    console.log(parsedData);

    localStorage.clear();
}