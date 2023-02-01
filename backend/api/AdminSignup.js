const Admin = require('../model/AdminDetails');
// const gravatar = require('gravatar')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
module.exports = (app) => {
    app.post("/adminsignup", async (req, res,) => {
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
}
