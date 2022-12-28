const mongoose = require('mongoose');

const UserDetailsScehma = new mongoose.Schema({

    fname: {
        type:String,
        required:true
    },
    lname: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    }
})

const User = mongoose.model('Buyer',UserDetailsScehma);

module.exports = User;