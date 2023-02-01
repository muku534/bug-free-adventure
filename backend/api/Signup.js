const User = require('../model/UserDetails');
// const gravatar = require('gravatar')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
module.exports = (app) => {
    app.post("/signup", async (req, res,) => {
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
                        url:" https://res.cloudinary.com/dkkj6aflt/image/upload/v1674198933/images_lneu2x.png"
                    }
                })
                // const picture = gravatar.url(email, { s: '200', r: 'pg', d: 'mm' })
                user.save(err => {
                    if (err) {
                        res.send(err)
                    } else {
                        res.send({ message: "Successfully Registered, Please login now."})
                    }
                })
            }
        })

    });
}