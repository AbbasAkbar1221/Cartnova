const express = require('express');
const router = express.Router();

const { addToCart, removefromcart, removeAllQuantities, getCart }= require("../controllers/cart");
//creating api for adding product to cart
router.post("/addtocart", addToCart);

// creating api to remove product from cart
router.post("/removefromcart", removefromcart);

//creating api to delete all the quantities of a product from cart
router.post("/removeallquantities", removeAllQuantities);

//creating api to get cart data
router.get("/getcart", getCart);


module.exports = router;