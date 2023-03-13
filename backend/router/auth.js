const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router();
const bcrypt = require('bcrypt')


const User = require('../model/UserDetails');
const Product = require('../model/ProductDetails');
const Order = require('../model/OrderDetails')
const Authentication = require('../middleware/Authentication');


//signup
router.post("/signup", async (req, res,) => {
    const { fname, lname, email, password, avatar } = req.body;
    const encryptedpassword = await bcrypt.hash(password, 8);
    User.findOne({ email: email }, async (_err, user) => {
        if (user) {
            res.send({ message: "User already registerd" })
        } else {
            const user = new User({
                fname,
                lname,
                email,
                password: encryptedpassword,
                avatar: {
                    public_id: "images_lneu2x",
                    url: " https://res.cloudinary.com/dkkj6aflt/image/upload/v1674198933/images_lneu2x.png"
                }
            })
            // const picture = gravatar.url(email, { s: '200', r: 'pg', d: 'mm' })
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Successfully Registered, Please login now." })
                }
            })
        }
    })

});


//signin
router.post("/signin", async (req, res) => {
    let token;
    const { email, password } = req.body
    User.findOne({ email: email }, async (_err, user) => {
        // setAuthToken(user, 200, res)
        if (user) {
            if (await bcrypt.compare(password, user.password)) {

                token = await user.generateAuthToken();
                console.log(token);

                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true
                });

                res.send({ message: "Login Successfull", user: user, })
            } else {
                res.send({ message: "Password didn't match" })
            }

        } else {
            res.send({ message: "User not registered" })
        }
    })
});

//Admin Signup
router.post("/adminsignup", async (req, res,) => {
    const { fname, lname, email, password, avatar } = req.body;
    const encryptedpassword = await bcrypt.hash(password, 8);
    Admin.findOne({ email: email }, async (_err, admin) => {
        if (admin) {
            res.send({ message: "User already registerd" })
        } else {
            const admin = new Admin({
                fname,
                lname,
                email,
                password: encryptedpassword,
                avatar: {
                    public_id: "images_lneu2x",
                    url: " https://res.cloudinary.com/dkkj6aflt/image/upload/v1674198933/images_lneu2x.png"
                }
            })
            // const picture = gravatar.url(email, { s: '200', r: 'pg', d: 'mm' })
            // const token = user.getJwtToken();
            admin.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Successfully Registered, Please login now.", })
                }
            })
        }
    })

});

///Admin login
router.post("/adminlogin", async (req, res) => {
    const { email, password } = req.body
    Admin.findOne({ email: email }, async (_err, admin) => {
        // const token = user.getJwtToken();
        if (admin) {
            if (await bcrypt.compare(password, admin.password)) {
                token = await admin.generateAuthToken();
                console.log(token);

                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true
                });
                res.send({ message: "Login Successfull", admin: admin, })
            } else {
                res.send({ message: "Password didn't match" })
            }

        } else {
            res.send({ message: "User not registered" })
        }
    })
});




//logout 
router.post("/logout", async (req, res) => {

    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: 'logged out'
    })

})


//Profile page
router.get('/profile', Authentication, (req, res,) => {
    res.send(req.rootUser);
})


//update User Profile
router.put("/updateProfile", Authentication, async (req, res, next) => {
    const NewUserData = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
    }

    //update avatar : Later

    const user = await User.findByIdAndUpdate(req.rootUser, NewUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        user
    })
})

// //update OR change the Previous Password not Working
// router.put("/updatePassword", Authentication, async (req, res, next) => {
//     const password = req.body
//     const user = await User.findById(req.rootUser).select("+password");

//     //check previous user password 
//     const isMatched = await bcrypt.compare(password, user.password)
//     if (!isMatched) {
//         return next("Old Password is Incorrect");
//     }

//     // user.password = req, body.password;
//     await user.save();

//     sendToken(user, 200, res)
// })

// add products
router.post("/Product", async (req, res, next) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
    next();
})

//get all products
router.get("/getProducts", async (req, res, next) => {

    const Products = await Product.find();

    res.status(200).json({
        success: true,
        count: Products.length,
        Products
    })
})

//get single product
router.get("/getSingleProducts/:id", async (req, res, next) => {
    const getSingleProducts = await Product.findById(req.params.id);

    if (!getSingleProducts) {
        return res.status(404).json({
            success: false,
            message: "Product not Found"
        })
    }

    res.status(200).json({
        success: true,
        getSingleProducts
    })
})

//update the Products
router.put("/updateProducts/:id", async (req, res, next) => {

    let product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json({
            success: true,
            message: "product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        product
    })
})

//delete products
router.delete("/deleteProducts/:id", async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Product not Found"
        })
    }

    await Product.remove();

    res.status(200).json({
        success: true,
        message: "product is Deleted Sucessfully"
    })
})


//create new order
router.post("/newOrder", Authentication, async (req, res, next) => {
    const { orderItems,
        ShippingInfo,
        itemsPrice,
        taxPrice,
        ShippingPrice,
        totalPrice,
        paymentInfo,
        rootUser
    } = req.body;

    const order = await Order.create({
        orderItems,
        ShippingInfo,
        itemsPrice,
        taxPrice,
        ShippingPrice,
        totalPrice,
        paymentInfo,
        paidAt: Date.now(),
        user: req.rootUser
    })

    res.status(200).json({
        success: true,
        order
    })
})


//get logged in user orders 
router.get("/myOrders/:id", Authentication, async (req, res, next) => {
    // const orders = await Order.find({ User: req.User.id })
    const orders = await Order.find({ User: req.rootUser })

    res.status(200).json({
        success: true,
        orders
    })
})


// get all orders 
router.get("/allOrders", Authentication, async (req, res, next) => {
    const orders = await Order.find({ User: req.rootUser })

    let totaalAmount = 0;
    orders.forEach(order => {
        totaalAmount += order.totalPrice
    })

    res.status(200).json({
        success: true,
        totaalAmount,
        orders
    })
})

//update process of order Work in progress
router.put("/updateOrders/:id", Authentication, async (req, res, next) => {
    const order = await Order.find({ User: req.rootUser })
    // const order = await Order.findById(req.params.id)

    if (order.orderStatus === 'Delivered') {
        return next("You Have already delivered thisorder", 400)
    }

    order.orderItems.forEach(async item => {
        await updateStock(item.product, item.quantity)
    })

    order.orderStatus = req.body.orderStatus,
        order.delieverdAt = Date.now()

    await order.save()

    res.status(200).json({
        success: true,

    })
})

async function updateStock(id, quantity) {
    const product = await Product.findById(id);

    product.stock = product.stock - quantity;

    await product.save({ validateBeforeSave: false })
}

// delete the orders
router.delete("/deleteOrder/:id", async (req, res, next) => {
    const order = await Order.findById(req.params.id)

    if (!order) {
        return next("no order found with this ID", 404)
    }

    await order.remove()

    res.status(200).json({
        success: true
    })
})

//User can give the Reviews and also remove it 
router.put("/reviews", Authentication, async (req, res, next) => {
    const { rating, comment, ProductId } = req.body;

    const review = {
        user: req.rootUser._id,
        fname: req.body.fname,
        ratings: Number(rating),
        comment
    }

    const product = await Product.findById(ProductId);

    const isReviewed = product.reviews.find(
        r => r.user.toString() === req.rootuser._id.toString()
    )

    if (isReviewed) {
        product.reviews.forEach(review => {
            if (review.user.toString() === req.rootUser._id.toString()) {
                review.Comment = comment;
                review.rating = rating;
            }
        })
    } else {
        product.reviews.push(review);
        product.numofReviews = product.reviews.length
    }

    product.ratings = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true
    })
})
module.exports = router;