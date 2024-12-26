const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const userController = require('../controllers/user-controller');


router.post('/register', [body('email').isEmail().withMessage('Invalid email'), body('fullname.Fristname').isLength({min:3}).withMessage
    ('First name must be 3 character long'), body('password').isLength({min:3}).withMessage('Password must be at least 6 characters long')
],userController.registerUser);


module.exports = router;

