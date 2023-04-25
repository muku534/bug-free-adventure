const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')

const SellerDetailsScehma = new mongoose.Schema({

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

SellerDetailsScehma.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
}


const Seller = mongoose.model('Seller', SellerDetailsScehma);

module.exports = Seller;