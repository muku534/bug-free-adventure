const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
{
    fname:String,
    lname:String,
    email:String,
    phoneNo:String, // New content
},
{
    collection:"Buyers",
}
);

mongoose.model("Buyers",UserDetailsScehma);