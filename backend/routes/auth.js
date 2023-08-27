const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router();
const bcrypt = require('bcrypt')
const multer = require('multer');

const User = require('../model/UserDetails');
const Contact = require('../model/ContactList');


// Define the storage for uploaded files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Save files to the 'uploads' directory
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1]);
    },
});


// POST request to save the generated number
router.post('/GenerateNumber', async (req, res) => {
    try {
        const randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
        const newNumber = new User({ randomNumber: randomNumber.toString() });
        await newNumber.save();
        res.status(201).json({ success: true, randomNumber: newNumber.randomNumber });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to generate and store number.' });
    }
});

// Get request to get the generated number for Signin
router.get('/SignIn', async (req, res) => {
    const { randomNumber } = req.query;

    try {
        // Check if the number exists in the User Collection
        const user = await User.findOne({ randomNumber });

        if (user) {
            // If the number is found in the User Collection, generate a JWT token and send it to the client
            const token = jwt.sign({ phoneNumber: user.randomNumber }, process.env.SECRET_KEY);
            return res.json({ success: true, token });
        } else {
            // If the number is not found in the User Collection, send a response indicating login failed
            return res.json({ success: false, message: 'User not found.' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ success: false, message: 'Login failed.' });
    }
});
// Create the multer middleware
const upload = multer({ storage: storage });


// POST request to save the user information 
router.post('/profile', async (req, res) => {
    try {
        const { randomNumber, name, bio } = req.body;

        // Check if randomNumber exists in the database
        const existingProfile = await User.findOne({ randomNumber });

        if (existingProfile) {
            // Update existing profile
            existingProfile.name = name;
            existingProfile.bio = bio;
            // Add other fields if needed

            await existingProfile.save();
            return res.json({ message: 'Profile updated successfully' });
        } else {
            // Create a new profile if randomNumber is not found
            const newProfile = new User({
                randomNumber,
                name,
                bio,
                // Add other fields if needed
            });

            await newProfile.save();
            return res.json({ message: 'Profile created successfully' });
        }
    } catch (error) {
        console.error('Error saving profile:', error);
        return res.status(500).json({ message: 'Failed to save profile' });
    }
});

//POST request to add the new contacts 
router.post('/AddContact', async (req, res) => {
    const { randomNumber, userRandomNumber, firstName, lastName, bio } = req.body;

    try {
        // Check if the user with the provided randomNumber exists in the User collection
        const user = await User.findOne({ randomNumber });

        if (!user) {
            // If the user doesn't exist, send a response indicating that it doesn't exist
            return res.json({ success: false, message: 'User not found.' });
        }

        // If the user exists, add the contact information to the user's Contacts array
        user.Contacts.push({ randomNumber, firstName, lastName, bio });

        // Save the updated user document with the new contact information
        await user.save();

        // Create a new Contacts document with the requested user's ID and contact information
        const newContact = new Contacts({
            userId: user._id,
            Contacts: [
                {
                    randomNumber,
                    firstName,
                    lastName,
                    bio,
                },
            ],
        });

        // Save the new Contacts document to the Contacts collection
        const savedContact = await newContact.save();

        // Return success response with the saved contact details
        res.json({ success: true, contact: savedContact });
    } catch (error) {
        // Handle any errors that occurred during database interaction
        console.error('Error during contact addition:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

module.exports = router;