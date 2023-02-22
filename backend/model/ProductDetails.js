const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const ProductDetailsScehma = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please enter product name"],
        traim:true,
        maxlength:[100,"Product name cannot exced 100 charactersa"],
    },
    price:{
        type:Number,
        required:[true, "Please enter product price"],
        maxlength:[5,"Product name cannot exced 5 characters"],
        default:0.0
    },
    description:{
        type:String,
        required:[true, "Please enter product description"],
    },
    ratings:{
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String, 
                required:true
            },            
        }
    ],
    category:{
        type:String,
        required:[true, "Please select category for this product"],
        enum:{
            values:[
                'Laptop',
                'computers'
            ],
            message:'Please select category for product',
        }
    },
    stock:{
        type:Number,
        required:[true, 'please enter product stock'],
        maxlength:[5,"Product name cannot exced 5 characters" ]
    },
    numofReviews:{
        type:Number,
        default:0,
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:String,
                required:true
            },
            Comment:{
                type:String,
                required:true
            },
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    },
    
});
const Product = mongoose.model('Product', ProductDetailsScehma);

module.exports = Product;