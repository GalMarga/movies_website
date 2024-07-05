//membersShema.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const membersShema = new Schema(
    {
        email: { type: String, required: true },
        city: { type: String, required: true },
        nameMember: { type: String, required: true },
        watchMovies: { type: Array, required: false}
       
    } , { versionKey: false } ) 

const Member = mongoose.model('Members', membersShema, 'members');

module.exports = Member;