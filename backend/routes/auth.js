const express = require('express');
const router = express.Router();

const {signup,signin,getUserProfile,adminlogin,adminsignup,logout} = require('../controller/userAuth');

router.route('/signup').post(signup);
router.route('/signin').post(signin);
router.route('/adminsignup').post(adminsignup);
router.route('/adminlogin').post(adminlogin);
router.route('/profile').get(getUserProfile);
router.route('/logout').get(logout);