const User = require('../models/user');

const addUser = (req, res) => {
    const {name, age, country} = req.body;

    const user = new User(name, age, country);
    user.save()
        .then(() => {
            res.status(201).send();
        })
        .catch(error => {
            console.log(error);
        });
};

const getUsers = (req, res) => {
    User.fetchAll()
        .then(users => {
            res.send(users);
        })
        .catch(error => {
            console.log(error);
        });
};

const getUsersPage = (req, res) => {
    User.fetchAll()
        .then(data => {
            const users = [...JSON.parse(data)];
            const pageTitle = 'Home';
            const route = '/users';

            res.render('users', {pageTitle, path: route, users});
        })
        .catch(error => {
            console.log(error);
        });
};

module.exports = { addUser, getUsers, getUsersPage };
