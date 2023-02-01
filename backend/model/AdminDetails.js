const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const AdminDetailsScehma = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, "Please provide a fname"],
    },
    lname: {
        type: String,
        required: [true, "Please provide a lname"],
    },
    email: {
        type: String,
        required: [true, "Please provide a unique email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique: false,
    },
    phoneNumber: {
        type: String,
    },
    address: {
        type: String
    },
    avatar: {
        public_id:{
            type: String,
            required:true
        },
        url:{
            type: String,
            required:true
        }
    },
    role:{
        type: String,
        default:'admin'
    },
    creactedAt:{
        type: String,
        default:Date.now
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date
});

const Admin = mongoose.model('Admin', AdminDetailsScehma);

module.exports = Admin;