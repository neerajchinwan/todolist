const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required field']
    },
    email: {
        type: String,
        required: [true, 'Email is a Required Field'],
        unique: true,
        validate: [validator.isEmail, 'Please enter valid email']
    },
    country: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    confirmPassword: {
        type: String,
        required: true,
        validate: {
            validator: function(val){
                return val === this.password
            },
            message: 'Password and Confirm Password does not matched'
        }
    }
})

userSchema.pre('save', async function(){
    this.password = await bcrypt.hash(this.password, 10);
    this.confirmPassword = undefined;
})

userSchema.methods.comparePassword = async function(password, passwordDb){
    return await bcrypt.compare(password, passwordDb);
}

const User = mongoose.model('User', userSchema);

module.exports = User;