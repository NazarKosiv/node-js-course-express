const path = require('path');
const fs = require('fs');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

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
    res.sendFile(path.join(rootDir, 'public', 'views', 'users.html'));
});

router.get('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'public', 'views', 'index.html'));
});

module.exports = router;
