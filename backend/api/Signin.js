const User = require('../model/UserDetails');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
// const { default: setAuthToken } = require('../utils/setAuthToken');
module.exports = (app) => {
    app.post("/signin", async (req, res) => {
        let token;
        const { email, password } = req.body
        User.findOne({ email: email }, async (_err, user) => {
            // setAuthToken(user, 200, res)
            if (user) {
                if (await bcrypt.compare(password, user.password)) {

                    token = await user.generateAuthToken();
                    console.log(token);

                    res.cookie("jwtoken",token,{
                        expires:new Date(Date.now() + 25892000000),
                        httpOnly:true
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
}

module.exports.logout = async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: 'logged out'
    })
}
