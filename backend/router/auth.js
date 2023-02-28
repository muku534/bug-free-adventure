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
router.get("/getAdminProducts", async (req, res, next) => {

    const Products = await Product.find();

    res.status(200).json({
        success: true,
        count: getProducts.length,
        Products
    })
})

//get single product
router.get("/getSingleProducts", async (req, res, next) => {
    const getSingleProducts = await Product.findById(req.params._id);

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
router.put("/updateProducts", async (req, res, next) => {

    let product = await Product.findById(req.params._id);

    if (!product) {
        return res.status(404).json({
            success: true,
            message: "product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params._id, req.body, {
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
router.delete("/deleteProducts", async (req, res, next) => {

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
router.post("/newOrder", async (req, res, next) => {
    const { orderItems,
        shippingInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paymentInfo
    } = req.body;

    const order = await Order.create({
        orderItems,
        shippingInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paymentInfo,
        paidAt: Date.now(),
        user: req.user._id
    })

    res.send(200).json({
        success: true,
        order
    })
})


//get logged in user orders 
router.post("/myOrders", async (req, res, next) => {
    const orders = await Order.find({ User: req.user.id })

    res.status(200).json({
        success: true,
        orders
    })
})


// get all orders 
router.get("/allOrders", async (req, res, next) => {
    const orders = await orders.find()

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

//update process of order 
router.put("/updateOrders", async (req, res, next) => {
    const order = await Order.findById(req.params.id)

    if (order.orderStatus === 'Delivered') {
        return next(new ("You Have already delivered thisorder", 400))
    }

    order.orderItems.forEach(async item => {
        await updateStock(item.product, item.quantity)
    })

    order.orderStatus = req.body.status,
        order.deliveredAt = Date.now()

    await order.save()

    res.status(200).json({
        success: true,
    })
})

async function updateStock(id, quantity) {
    const product = await Product.findById(id);

    product.stock = product.stock = quantity;

    await product.save()
}


module.exports = router;