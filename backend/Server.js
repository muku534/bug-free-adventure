// server/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const GenerateNumber = require('./routes/auth');
const cors = require('cors');
const multer = require('multer');
const app = express();

//Enable CORS for all origins
app.use(cors());

// Parse JSON body
app.use(express.json());

// MongoDB configuration (replace YOUR_MONGODB_URI with your actual MongoDB connection string)
const DB = process.env.ATLAS_URI

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('connection succesfull');
}).catch((err) => console.log('Error in connecting to DataBase', err.message));

// Routes
app.use(require("./routes/auth"));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
