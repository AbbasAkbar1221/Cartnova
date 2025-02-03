const express = require('express');
const router = express.Router();

const { addProduct, removeProduct, getAllProducts, trendingWomen, trendingMen, trendingKid, newCollection } = require("../controllers/products");

router.post("/addproduct", addProduct);

//creating api for deleting product
router.post("/removeproduct", removeProduct);

//creating api for getting all products
router.get("/allproducts", getAllProducts);

//creating api for newCollection data
router.get("/newcollection", newCollection);
  
  //creating api for trending data
  router.get("/trendingwomen", trendingWomen);
  router.get("/trendingmen", trendingMen);
  router.get("/trendingkid", trendingKid);



module.exports = router;