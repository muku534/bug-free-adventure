require('dotenv').config()
const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
const app = express()
const User = require('./model/UserDetails.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const cors  = require('cors')
const morgan = require('morgan')
const Signin = require('./api/Signin')
const Signup = require('./api/Signup')
// app.set("view engine", "ejs");


app.use(express.json());

/** middlewares */
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); // less hackers know about our stack

app.listen(5000, '0.0.0.0', () => {
    console.log('listening to the port no 5000');
});

const DB = 'mongodb+srv://MUkeshPrajapati:mukesh3399@cluster0.wspzlbi.mongodb.net/Final_year_project?retryWrites=true&w=majority'

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
require("./api/product")(app);
// require("./router/auth/profile");
app.use(require("./router/auth"));



app.post("/forgot-password", async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ status: "User Not Exists!!" });
        }
        const secret = JWT_SECRET + User.password;
        const token = jwt.sign({ email: user.email, id: user._id }, secret, {
            expiresIn: "5m",
        });
        const link = `http://localhost:5000/reset-password/${user._id}/${token}`;
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "prajapatimukesh0111@gmail.com",
                pass: "muku@1112002",
            },
        });

        var mailOptions = {
            from: "youremail@gmail.com",
            to: "20bca116@vtcbb.edu.in",
            subject: "Password Reset",
            text: link,
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });
        console.log(link);
    } catch (error) { }
});

app.get("/reset-password/:id/:token", async (req, res) => {
    const { id, token } = req.params;
    console.log(req.params);
    const user = await User.findOne({ _id: id });
    if (!user) {
        return res.json({ status: "User Not Exists!!" });
    }
    const secret = JWT_SECRET + user.password;
    try {
        const verify = jwt.verify(token, secret);
        res.render("index", { email: verify.email, status: "Not Verified" });
    } catch (error) {
        console.log(error);
        res.send("Not Verified");
    }
});

app.post("/reset-password/:id/:token", async (req, res) => {
    const { id, token } = req.params;
    const { password } = req.body;

    const user = await User.findOne({ _id: id });
    if (!user) {
        return res.json({ status: "User Not Exists!!" });
    }
    const secret = JWT_SECRET + user.password;
    try {
        const verify = jwt.verify(token, secret);
        const encryptedPassword = await bcrypt.hash(password, 10);
        await User.updateOne(
            {
                _id: id,
            },
            {
                $set: {
                    password: encryptedPassword,
                },
            }
        );

        res.render("index", { email: verify.email, status: "verified" });
    } catch (error) {
        console.log(error);
        res.json({ status: "Something Went Wrong" });
    }
});