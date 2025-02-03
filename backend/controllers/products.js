const Product = require("../models/products");

async function addProduct (req, res){
    try {
      let products = await Product.find({});
      let id;
      if (products.length > 0) {
        let last_product_array = products.slice(-1); //last element of array
        let last_product = last_product_array[0];
        id = last_product.id + 1;
      } else {
        id = 1;
      }
      const { name, image, category, new_price, old_price, available } = req.body;
      const product = new Product({
        id: id,
        name,
        image,
        category,
        new_price,
        old_price,
        available,
      });
      console.log(product);
      await product.save();
      console.log("saved");
      res.json({
        success: true,
        name: req.body.name,
      });
    } catch (error) {
      console.error("Error saving product:", error);
      res.status(500).json({ success: false, error: "Failed to save product" });
    }
  }

  async function removeProduct(req, res){
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("Removed");
    res.json({
      success: true,
      name: req.body.name,
    });
  }

  async function getAllProducts(req, res) {
    let products = await Product.find({});
    console.log("All products fetched");
    res.json(products);
  }

  async function trendingWomen(req, res){
    let products = await Product.find({ category: "women" });
    let trending_in_women = products.slice(0, 4);
    console.log("Trending in women fetched");
    res.send(trending_in_women);
  }


  async function trendingMen (req, res){
    let products = await Product.find({ category: "men" });
    let trending_in_men = products.slice(1).slice(-4);
    console.log("Trending in men fetched");
    res.send(trending_in_men);
  }

  async function trendingKid (req, res){
    let products = await Product.find({ category: "kid" });
    let trending_in_kid = products.slice(1).slice(-4);
    console.log("Trending in kid fetched");
    res.send(trending_in_kid);
  }

  async function newCollection(req, res){
      let products = await Product.find({});
      let newcollection = products.slice(1).slice(-8);
      console.log("New Collection fetched");
      res.send(newcollection);
    }

  module.exports = {
    addProduct,
    removeProduct,
    getAllProducts,
    trendingWomen,
    trendingMen,
    trendingKid,
    newCollection
  };