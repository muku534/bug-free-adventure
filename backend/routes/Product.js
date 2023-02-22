const express =require('express');
const router = express.Router();

const{getProduct,newProduct} = require('../api/product');

router.route('/products').get(getProduct);
router.route('/product/new').post(newProduct);

module.exports= router;