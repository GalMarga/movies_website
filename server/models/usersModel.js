//usersModel.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersShema = new Schema(
    {
        fullName: { type: String, required: true },
        userName: { type: String, required: true },
        password: { type: String, required: true },
    
    } , { versionKey: false } ) 

const User = mongoose.model('User', usersShema, 'users');

module.exports = User;