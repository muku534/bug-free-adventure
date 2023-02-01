const Admin = require('../model/AdminDetails');
// const gravatar = require('gravatar')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
// Admin login 
module.exports = (app) => {
    app.post("/adminlogin", async (req, res) => {
        const { email, password } = req.body
        Admin.findOne({ email: email }, async (_err, admin) => {
            // const token = user.getJwtToken();
            if (admin) {
                if (await bcrypt.compare(password, admin.password)) {
                    res.send({ message: "Login Successfull", admin: admin, })
                } else {
                    res.send({ message: "Password didn't match" })
                }

            } else {
                res.send({ message: "User not registered" })
            }
        })
    });
}