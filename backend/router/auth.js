const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router();
const bcrypt = require('bcrypt')


const User = require('../model/UserDetails');
const Product = require('../model/ProductDetails');
const Order = require('../model/OrderDetails');
const Cart = require('../model/CartDetails')
const Authentication = require('../middleware/Authentication');
const APIFeatures = require('../utils/APIFeatures')
const cloudinary = require('cloudinary')

//signup
router.post("/signup", async (req, res,) => {
    const { fname, lname, email, password, avatar } = req.body;
    const encryptedpassword = await bcrypt.hash(password, 8);
    const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: 'avatars',
        width: 150,
        crop: "scale"

    })
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
                    public_id: result.public_id,
                    url: result.secure_url
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
router.put("/updatePassword", Authentication, async (req, res, next) => {
    const { oldPassword, newPassword } = req.body;
    const user = await User.findById(req.rootUser).select("+password");

    //check previous user password 
    const isMatched = await bcrypt.compare(oldPassword, user.password)
    if (!isMatched) {
        return res.status(400).json({ message: "Old Password is Incorrect" });
    }

    user.password = newPassword;
    await user.save();

    sendToken(user, 200, res)
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
router.get("/getProducts", async (req, res, next) => {


    const resPerPage = 16;
    const productsCount = await Product.countDocuments();

    const apiFeatures = new APIFeatures(Product.find(), req.query)
        .search()
        .filter()
        .pagination(resPerPage)

    const Products = await apiFeatures.query;

    res.status(200).json({
        success: true,
        count: Products.length,
        productsCount,
        resPerPage,
        Products
    })
})

//get single product
router.get("/ProductDetails/:id", async (req, res, next) => {
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
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        await product.remove();

        res.status(200).json({
            success: true,
            message: "Product is deleted successfully"
        });
    } catch (err) {
        next(err);
    }
});

//add to cart 
router.post('/add-to-cart', Authentication, async (req, res) => {
    const { product, rootUser, quantity, price } = req.body;

    // Check if the product is already in the cart for this user
    const existingCartItem = await Cart.findOne({ product, user: req.rootUser });
    if (existingCartItem) {
        // If the product is already in the cart, update the quantity
        existingCartItem.quantity += quantity;
        await existingCartItem.save();
        res.status(200).json({
            success: true,
            message: 'Product quantity updated in cart',
            cartItem: existingCartItem
        });
    } else {
        // If the product is not in the cart, create a new cart item
        const newCartItem = await Cart.create({
            product,
            user: req.rootUser,
            quantity,
            price
        });
        res.status(200).json({
            success: true,
            message: 'Product added to cart',
            cartItem: newCartItem
        });
    }
});

//get add-to-cart product
router.get('/cart', Authentication, async (req, res) => {
    try {
        const cartItems = await Cart.find({ user: req.rootUser }).populate('product');
        res.status(200).json({
            success: true,
            cartItems
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Unable to retrieve cart items'
        });
    }
});

//user can delete that cart product
router.delete('/cart/:id', Authentication, async (req, res) => {
    const { id } = req.params;
    try {
        const deletedItem = await Cart.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: 'Product removed from cart',
            cartItem: deletedItem
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Could not remove product from cart',
            error: error.message
        });
    }
});


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

    // Decrease product stock
    orderItems.forEach(async (item) => {
        const product = await Product.findById(item.product);

        if (product.stock < item.qty) {
            throw new Error(`Product ${product.name} has insufficient stock`);
        }
        product.stock -= item.qty;
        await product.save();
    });

    res.status(200).json({
        success: true,
        order
    });
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
    try {
        const order = await Order.findOne({ _id: req.params.id, User: req.rootUser });

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found"
            });
        }

        if (order.orderStatus === "Delivered") {
            return next(new Error("You have already delivered this order"));
        }

        for (const item of order.orderItems) {
            await updateStock(item.product, item.quantity);
        }

        order.orderStatus = req.body.orderStatus;
        order.delieverdAt = Date.now();

        await order.save();

        res.status(200).json({
            success: true,
            message: "Order updated successfully"
        });
    } catch (err) {
        next(err);
    }
});

async function updateStock(id, quantity) {
    const product = await Product.findById(id);

    product.stock -= quantity;

    await product.save({ validateBeforeSave: false });
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
        fname: req.body.firstName, // change to the correct property name
        rating: Number(rating), // fix typo in property name
        comment
    }

    const product = await Product.findById(ProductId);

    const existingReview = product.reviews.find(
        r => r.user.toString() === req.rootUser._id.toString()
    )

    if (existingReview) {
        existingReview.comment = comment;
        existingReview.rating = rating;
    } else {
        product.reviews.push(review);
        product.numofReviews += 1; // only update when a new review is added
    }

    if (product.reviews.length > 0) {
        product.ratings = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length;
    } else {
        product.ratings = 0; // set to 0 if there are no reviews
    }

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true
    })
})

module.exports = router;