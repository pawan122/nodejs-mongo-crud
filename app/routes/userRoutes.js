const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController')

router.get('/users', userController.getUsers)
router.get('/users/:id', userController.getUserById)
router.post('/create-user', userController.createUsers);

module.exports = router;