const userModel = require('../models/user.model')

const userServices = require('../services/user.services')

const {validationResult} = require('express-validation');

module.exports.registerUser = async (req, res, next) => {
    const error = validationResult(req);

    if(!error.isempty()) {
        return res.status(400).json({errors: error.array()});
    }
    
}