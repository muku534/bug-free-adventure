const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const UserDetailsScehma = new mongoose.Schema({

    randomNumber: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: [false, "Please provide a name"],
    },
    bio: {
        type: String,
        required: [false, "Please provide a bio"],
    },
    address: {
        type: String
    },
    profileImage: {
        type: String,
        required: false,
    },
    creactedAt: {
        type: Date,
        default: Date.now
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ],
    resetPasswordToken: String,
    resetPasswordExpire: Date
});

//return JWT token

// UserDetailsScehma.methods.getJwtToken = function(){
//     return jwt.sign({_id: this._id}, process.env.JWT_SECRET,{
//         expiresIn: process.env.JWT_EXPIRES_TIME
//     });
// }

UserDetailsScehma.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
}


// UserDetailsScehma.method.generateHash = function (password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSynce(8), null);
// };

// UserDetailsScehma.method.validPassword = function (password) {
//     return bcrypt.compareSync(password, this.password);
// };

const User = mongoose.model('User', UserDetailsScehma);

module.exports = User;