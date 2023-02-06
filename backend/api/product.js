const Product = require('../model/ProductDetails');

//create new product => /product

module.exports = (app) => {
    app.post("/Product", async (req, res, next) => {
        const product = await Product.create(req.body);

        res.status(201).json({
            success: true,
            product
        })


    })
}

module.exports = (app) =>{
    app.post("/product/:id",async(req,res,next) =>{
        let product = await Product.findById(req.params.id);

        if(!product){
            return res.status(404).json({
                success:false,
                message:'Product not found'
            })
        }

        Product = await Product.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true,
            useFindAndModify:false
        });
        res.send(200).json({
            success:true,
            product
        })
    })
}

// module.exports = (app) =>{
//     app.post("/products")
// }

