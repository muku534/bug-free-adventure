const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
const app = express()
const User = require('./model/UserDetails.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
// const cors = require('cors')

// app.use(cors({
//     origin: 'http://localhost:3000', // use your actual domain name (or localhost), using * is not recommended
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
//     credentials: true
// }))


// const server = http.createServer((req, res) => {
//     res.end('Hello from the other sides');
// });

// server.listen(5000, () => {
//     console.log('listening to the port no 5000');
// })
// "mongodb+srv://MUkeshPrajapati:mukesh3399@cluster0.wspzlbi.mongodb.net/?retryWrites=true&w=majority"
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

app.listen(5000, '0.0.0.0', () =>{
    console.log('listening to the port no 5000');
});

//Routes
app.post("/signin", (req, res) => {
    const { email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ message: "Login Successfull", user: user })
            } else {
                res.send({ message: "Password didn't match" })
            }
        } else {
            res.send({ message: "User not registered" })
        }
    })
})

app.post("/signup", async (req, res) => {
    // const { fname, lname, email, password} = req.body
    // User.findOne({email: email}, (err, user) => {
    //     if(user){
    //         res.send({message: "User already registerd"})
    //     } else {
    //         const user = new user({
    //             fname,
    //             lname,
    //             email,
    //             password
    //         })
    //         user.save(err => {
    //             if(err) {
    //                 res.send(err)
    //             } else {
    //                 res.send( { message: "Successfully Registered, Please login now." })
    //             }
    //         })
    //     }
    // })

    try {
        const { fname, lname, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res
                .status(400)
                .json({ msg: "User with same email already exists!" })
        }

        const hashedPassword = await bcrypt.hash(password, 8);

        let user = new User({
            fname,
            lname,
            email,
            password: hashedPassword,
        })
        user = await user.save();
        res.json(user);

        console.log(user);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }

})