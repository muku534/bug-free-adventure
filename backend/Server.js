const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
const app = express()
const User = require('./model/UserDetails.js')
const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs')

app.use(express.json());

// const server = http.createServer((req, res) => {
//     res.end('Hello from the other sides');
// });

// server.listen(5000, () => {
//     console.log('listening to the port no 5000');
// });

app.listen(5000, () => {
    console.log('listening to the port no 5000');
});

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

//Routes
app.post("/signin", async (req, res)=> {
    const { email, password} = req.body
   await User.findOne({ email: email}, async(err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/signup", async (req, res)=> {
    const { fname, lname, email, password} = req.body
    User.findOne({email: email}, async(err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                fname,
                lname,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 
