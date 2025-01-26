const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user-controller');
const authMiddleware = require('../middleware/auth.middleware');


router.post('/register', [body('email').isEmail().withMessage('Invalid email'), body('fullname.firstname').isLength({min:3}).withMessage
    ('First name must be 3 character long'), body('password').isLength({min:3}).withMessage('Password must be at least 6 characters long')
],userController.registerUser);

router.post('/login', [body('email').isEmail().withMessage('Invalid email'),body('password').isLength({min:3}).withMessage('Password must be at least 6 character long')

], userController.loginUser); 

router.get('/profile',authMiddleware.authUser, userController.getUserProfile)


module.exports = router;

