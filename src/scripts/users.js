import { HttpService } from './services/http';

HttpService.getUsers('http://localhost:5000/user-list')
    .then(userList => {
        const container = document.querySelector('.main-section-content');
        const users = userList.map(user => createUserItem(user));

        users.forEach(user => {
            container.appendChild(user);
        });
    });

function createUserItem(user) {
    const userItem = document.createElement('div');
    userItem.classList.add('main-section-content__item');

    const propertyList = Object.keys(user);
    const userItemList = document.createElement('ul');
    userItemList.classList.add('main-section-content__list');

    propertyList.forEach(key => {
        const listItem = document.createElement('li');
        const listItemText = document.createTextNode(user[key]);
        listItem.classList.add('main-section-content__list__item');

        listItem.appendChild(listItemText);
        userItemList.appendChild(listItem);
    });

    userItem.appendChild(userItemList);

    return userItem;
}