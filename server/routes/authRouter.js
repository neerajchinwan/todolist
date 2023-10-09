const express = require('express');

const authController = require('./../controllers/authController');
const router = express.Router();

router.route('/create')
        .post(authController.signup)

router.route('/signin')
        .post(authController.login)

module.exports = router;