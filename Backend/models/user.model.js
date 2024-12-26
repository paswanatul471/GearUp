const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');





const userSchema = new Mongoose.Schema({

    fullname :{
        firstname:{
            type : 'string',
            required : true,
            minlength : [3, 'First name must be at least 3 characters long']
        },
        Lastname:{
            type : 'string',
            minlength : [3, 'Last name must be at least 3 characters long']
        }
        

    },
    email: {
        type : 'string',
        required : true,
        unique : true,
        minlength : [5, 'Email address must be at least 5 characters long']
    },
    password: {
        type : 'string',
        required : true,
        select: false
    },
    socketId :{
        type : 'string',

    }

})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id : this._id}, process.env.JWT_SECRET)
    return token;
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password,this.password);
}

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}


const userModel = mongoose.model('user', userSchema);

module.exports = userModel;