const express = require('express');

const userController = require('../controllers/user');
const homeController = require('../controllers/home');

const router = express.Router();

router.post('/add-user', userController.addUser);

router.get('/user-list', userController.getUsers);

router.get('/users', userController.getUsersPage);

router.get('/', homeController);

module.exports = router;
