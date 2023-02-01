const Product = require('../model/ProductDetails');

//create new product => /product

module.exports.newProduct = async (req,res,next) =>{

    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
};

