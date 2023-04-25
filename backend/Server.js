require('dotenv').config()
const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
const app = express()
const User = require('./model/UserDetails.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const cors = require('cors')
const morgan = require('morgan')
const Signin = require('./api/Signin')
const Signup = require('./api/Signup')
const cookieparser = require('cookie-parser')
const bodyparser = require('body-parser')
const cloudinary = require('cloudinary')
const fileupload = require('express-fileupload')
// app.set("view engine", "ejs");


app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieparser());

//setting up cloudinary
cloudinary.config({
    cloud_name: process.env_,
    api_key: process.env,
    api_secret: process.env
})
/** middlewares */
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); // less hackers know about our stack

app.listen(process.env_, '0.0.0.0', () => {
    console.log('listening to the port no 5000');
});

const DB =process.env

mongoose.set('strictQuery', true);

mongoose.connect(DB, {
    useNewUrlParser: true,
    // useCreactIndex:true,
    useUnifiedTopology: true,
    // useFindAndModify:false
}).then(() => {
    console.log('connection succesfull');
}).catch((err) => console.log('Error in connecting to DataBase', err.message));

//import all routes

//ROUTES
require("./api/adminsignup")(app);
require("./api/adminlogin")(app);
// require("./controller/products");
// require("./api/product");
require("./api/Signin")(app);
require("./api/Signup")(app);
require("./api/googlelogin");
// require("./api/product")(app);
// require("./router/auth/profile");
app.use(require("./router/auth"));



