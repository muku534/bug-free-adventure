const jwt = require('jsonwebtoken')
const express = require('exoress')
const router = express.router();
const bcrypt = require('bcrypt')


const User = require('../model/UserDetails');
const Authentication = require('../middleware/Authentication');


//signup
router.post("/signup", async (req, res,) => {
    const { fname, lname, email, password, avatar } = req.body;
    const encryptedpassword = await bcrypt.hash(password, 8);
    User.findOne({ email: email }, async (_err, user) => {
        if (user) {
            res.send({ message: "User already registerd" })
        } else {
            const user = new User({
                fname,
                lname,
                email,
                password: encryptedpassword,
                avatar: {
                    public_id: "images_lneu2x",
                    url: " https://res.cloudinary.com/dkkj6aflt/image/upload/v1674198933/images_lneu2x.png"
                }
            })
            // const picture = gravatar.url(email, { s: '200', r: 'pg', d: 'mm' })
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Successfully Registered, Please login now." })
                }
            })
        }
    })

});


//signin
router.post("/signin", async (req, res) => {
    let token;
    const { email, password } = req.body
    User.findOne({ email: email }, async (_err, user) => {
        // setAuthToken(user, 200, res)
        if (user) {
            if (await bcrypt.compare(password, user.password)) {

                token = await user.generateAuthToken();
                console.log(token);

                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true
                });

                res.send({ message: "Login Successfull", user: user, })
            } else {
                res.send({ message: "Password didn't match" })
            }

        } else {
            res.send({ message: "User not registered" })
        }
    })
});

//Admin Signup
router.post("/adminsignup", async (req, res,) => {
    const { fname, lname, email, password, avatar } = req.body;
    const encryptedpassword = await bcrypt.hash(password, 8);
    Admin.findOne({ email: email }, async (_err, admin) => {
        if (admin) {
            res.send({ message: "User already registerd" })
        } else {
            const admin = new Admin({
                fname,
                lname,
                email,
                password: encryptedpassword,
                avatar: {
                    public_id: "images_lneu2x",
                    url: " https://res.cloudinary.com/dkkj6aflt/image/upload/v1674198933/images_lneu2x.png"
                }
            })
            // const picture = gravatar.url(email, { s: '200', r: 'pg', d: 'mm' })
            // const token = user.getJwtToken();
            admin.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Successfully Registered, Please login now.", })
                }
            })
        }
    })

});

///Admin login
router.post("/adminlogin", async (req, res) => {
    const { email, password } = req.body
    Admin.findOne({ email: email }, async (_err, admin) => {
        // const token = user.getJwtToken();
        if (admin) {
            if (await bcrypt.compare(password, admin.password)) {
                token = await admin.generateAuthToken();
                console.log(token);

                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true
                });
                res.send({ message: "Login Successfull", admin: admin, })
            } else {
                res.send({ message: "Password didn't match" })
            }

        } else {
            res.send({ message: "User not registered" })
        }
    })
});


//Profile page

router.get('/profile', Authentication, (req, res,) => {
    res.send(req.rootUser);
})