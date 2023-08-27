const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const ContactList = new mongoose.Schema({


    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },

    Contacts: [

        {
            randomNumber: {
                type: String,
                required: true,
            },
            firstName: {
                type: String,
                required: [false, "Please provide a name"],
            },
            lastName: {
                type: String,
                required: [false, "Please provide a name"],
            },
            bio: {
                type: String,
                required: [false, "Please provide a bio"],
            },
        }

    ],


    // address: {
    //     type: String
    // },
    // profileImage: {
    //     type: String,
    //     required: false,
    // },
    creactedAt: {
        type: Date,
        default: Date.now
    },
});


const Contacts = mongoose.model('Contacts', ContactList);

module.exports = Contacts;