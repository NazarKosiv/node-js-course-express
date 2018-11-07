const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

router.get('/user-list', (req, res) => {
    const users = [{
        name: 'Nazar',
        age: 23,
        country: 'Ukraine'
    }, {
        name: 'Arkadiy',
        age: 22,
        country: 'Ukraine'
    }, {
        name: 'Vitaliy',
        age: 23,
        country: 'Ukraine'
    }];

    res.send(users);
});

router.get('/users', (req, res) => {
    res.sendFile(path.join(rootDir, 'public', 'views', 'users.html'));
});

router.get('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'public', 'views', 'index.html'));
});

module.exports = router;
