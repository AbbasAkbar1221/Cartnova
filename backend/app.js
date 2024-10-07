const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const path = require("path");
const cors = require("cors");
const { log } = require("console");
const app = express();
require('dotenv').config();

app.use(express.json());
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET;
app.use(cors());

//API creation

app.get("/", (req, res) => {
  res.send("Hello World");
});

//Image storage engine

const storage = multer.diskStorage({
  destination: "./uploads/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const uploads = multer({ storage: storage });

//creating upload endpoint for image upload
app.use("/images", express.static(path.join(__dirname, "uploads/images")));

app.post("/upload", uploads.single("product"), (req, res) => {
  console.log(req.file.filename);
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

//schema for creating product

const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

app.post("/addproduct", async (req, res) => {
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
});

//creating api for deleting product
app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("Removed");
  res.json({
    success: true,
    name: req.body.name,
  });
});

//creating api for getting all products
app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("All products fetched");
  res.json(products);
});

// Schema for creating user
const Users = mongoose.model("Users", {
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//creating api for user registration
app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res.status(400).json({
      success: false,
      error: "Email already exists",
    });
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  //or let cart = Array(300).fill(0);
  const user = new Users({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });
  await user.save();

  const data = {
    user: {
      id: user.id,
    },
  };

  
  const token = jwt.sign(data, JWT_SECRET);
  res.json({
    success: true,
    token,
  });
});

//creating api for user login
app.post("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    if (user.password === req.body.password) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, JWT_SECRET);
      res.json({
        success: true,
        token,
      });
    } else {
      return res.status(400).json({
        success: false,
        error: "Invalid password",
      });
    }
  } else {
    return res.status(400).json({
      success: false,
      error: "Invalid email",
    });
  }
});

//creating api for newCollection data
app.get("/newcollection", async (req, res) => {
  let products = await Product.find({});
  let newcollection = products.slice(1).slice(-8);
  console.log("New Collection fetched");
  res.send(newcollection);
});

//creating api for trending data
app.get("/trendingwomen", async (req, res) => {
  let products = await Product.find({ category: "women" });
  let trending_in_women = products.slice(0, 4);
  console.log("Trending in women fetched");
  res.send(trending_in_women);
});
app.get("/trendingmen", async (req, res) => {
  let products = await Product.find({ category: "men" });
  let trending_in_men = products.slice(1).slice(-4);
  console.log("Trending in men fetched");
  res.send(trending_in_men);
});
app.get("/trendingkid", async (req, res) => {
  let products = await Product.find({ category: "kid" });
  let trending_in_kid = products.slice(1).slice(-4);
  console.log("Trending in kid fetched");
  res.send(trending_in_kid);
});
//creating middleware to fetch user
const fetchuser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  } else {
    try {
      
      const data = jwt.verify(token, JWT_SECRET);
      
    //   const user = await Users.findOne({ id: data.user.id });
      req.user = data.user;   //The user data extracted from the token is attached to the req object as req.user.
      next();
    } catch (error) {
      res
        .status(401)
        .send({ error: "Please authenticate using a valid token" });
    }
  }
};

//creating api for adding product to cart
app.post("/addtocart",fetchuser, async (req, res) => {
    console.log("Add to cart", req.body.productId);
  let userData = await Users.findOne({ _id: req.user.id }); 
  userData.cartData[req.body.productId] += 1;
  await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
  res.json({
    success: true,
    message: "Added to cart",
  })
});

// creating api to remove product from cart
app.post("/removefromcart", fetchuser, async (req, res) => {
    console.log("Remove from cart", req.body.productId);
  let userData = await Users.findOne({ _id: req.user.id });
  if(userData.cartData[req.body.productId] > 0)
  userData.cartData[req.body.productId] -= 1;
  await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    res.json({
        success: true,
        message: "Removed from cart",
    });
}
);

//creating api to get cart data
app.get("/getcart", fetchuser, async (req, res) => {
    console.log("Get cart data");
    let userData = await Users.findOne({ _id: req.user.id });
    res.json(userData.cartData);
});



mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });

