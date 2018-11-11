const path = require('path');
const fs = require('fs');

const rootDir = require('../utils/path');

const addUser = (req, res) => {
    const user = req.body;
    fs.readFile(path.join(rootDir, 'db', 'users.json'), {encoding: 'UTF-8'}, (error, data) => {
        if (error) {
            console.log(error);
        } else {
            const users = [...JSON.parse(data)];

            users.push(user);

            const usersJson = JSON.stringify(users);

            fs.writeFile(path.join(rootDir, 'db', 'users.json'), usersJson, (error) => {
                if (error) {
                    console.log(error);
                } else {
                    res.status(201).send();
                }
            });
        }
    });
};

const getUsers = (req, res) => {
    fs.readFile(path.join(rootDir, 'db', 'users.json'), {encoding: 'utf-8'}, (error, users) => {
        if (error) {
            console.log(error);
        } else {
            res.send(users)
        }
    });
};

const getUsersPage = (req, res) => {
    fs.readFile(path.join(rootDir, 'db', 'users.json'), {encoding: 'UTF-8'}, (error, data) => {
        if (error) {
            console.log(error);
        } else {
            const users = [...JSON.parse(data)];
            const pageTitle = 'Home';
            const route = '/users';

            res.render('users', {pageTitle, path: route, users})
        }
    });
};

module.exports = { addUser, getUsers, getUsersPage };
