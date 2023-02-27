const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const UserDetailsScehma = new mongoose.Schema({

    googleId: {
        type: String,
        required: false
    },
    fname: {
        type: String,
        required: [true, "Please provide a fname"],
    },
    lname: {
        type: String,
        required: [true, "Please provide a lname"],
    },
    email: {
        type: String,
        required: [true, "Please provide a unique email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique: false,
    },
    phoneNumber: {
        type: String,
    },
    address: {
        type: String
    },
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    role: {
        type: String,
        default: 'user'
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

const User = mongoose.model('Buyer', UserDetailsScehma);

module.exports = User;