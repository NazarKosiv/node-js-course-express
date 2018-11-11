import axios from 'axios';
import {User} from "../models/user";

const form = document.querySelector('.main-section__content__item form');
const notification = document.querySelector('.main-section__content__notification');

const nameInput = form.elements[0],
      ageInput = form.elements[1],
      countryInput = form.elements[2];

const showNotification = (res) => {
    notification.classList.remove('main-section__content__notification--hidden');
    notification.classList.add('main-section__content__notification--shown');

    setTimeout(() => {
        notification.classList.remove('main-section__content__notification--shown');
        notification.classList.add('main-section__content__notification--hidden');
    }, 2000);
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value,
          age = ageInput.value,
          country = countryInput.value;

    const user = new User(name, age, country);

    axios.post('/add-user', user)
        .then(showNotification)
        .catch(showNotification);

    nameInput.value = '';
    ageInput.value = '';
    countryInput.value = '';
});
