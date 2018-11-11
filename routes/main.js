const path = require('path');
const fs = require('fs');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

router.post('/add-user', (req, res) => {
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
                }
            });
        }
    });
});

router.get('/user-list', (req, res) => {
    fs.readFile(path.join(rootDir, 'db', 'users.json'), {encoding: 'utf-8'}, (error, users) => {
        if (error) {
            console.log(error);
        } else {
            res.send(users)
        }
    });
});

router.get('/users', (req, res) => {
    fs.readFile(path.join(rootDir, 'db', 'users.json'), {encoding: 'UTF-8'}, (error, data) => {
        if (error) {
            console.log(error);
        } else {
            const users = [...JSON.parse(data)];
            const pageTitle = 'Home';
            const route = '/users';

            res.render(path.join(rootDir, 'views', 'users.pug'), {pageTitle, path: route, users})
        }
    });
});

router.get('/', (req, res) => {
    const pageTitle = 'Home';
    const route = '/';

    res.render(path.join(rootDir, 'views', 'index.pug'), {pageTitle, path: route});
});

module.exports = router;
