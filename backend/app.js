const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const authMiddleware = require("./middleware/authMiddleware");
require('./connection');
const PORT = process.env.PORT;

const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());

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
    image_url: `http://localhost:${PORT}/images/${req.file.filename}`,
  });
});

const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
const cartRoutes = require('./routes/cart');

app.use('/product', productRoutes);
app.use('/user', userRoutes);

app.use(authMiddleware);

app.use('/cart', cartRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});










// mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('Connected to MongoDB');

       

//         // Update function
//         const updateImageUrls = async () => {
//             try {
//                 // Find all products
//                 const products = await Product.find({});
//                 console.log(`Found ${products.length} products to update.`);

//                 // Loop through each product and update the image URL
//                 for (const product of products) {
//                     if (product.image.startsWith("http://localhost:4000/images/")) {
//                         // Replace the URL
//                         const newImageUrl = product.image.replace("http://localhost:4000/images/", "https://cartnova.onrender.com/images/");
//                         product.image = newImageUrl;
//                         await product.save(); // Save the updated product
//                         console.log(`Updated product ${product.id}: ${newImageUrl}`);
//                     }
//                 }

//                 console.log("All image URLs updated successfully.");
//             } catch (error) {
//                 console.error("Error updating image URLs:", error);
//             } finally {
//                 // Close the connection
//                 mongoose.connection.close();
//             }
//         };

//         // Call the update function
//         updateImageUrls();
//     })
//     .catch(err => {
//         console.error("MongoDB connection error:", err);
//     });



// mongoose.connect(MONGODB_URI)
//     .then(() => {
//         console.log('Connected to MongoDB');

//         // Update function to revert image URLs
//         const revertImageUrls = async () => {
//             try {
//                 // Find all products
//                 const products = await Product.find({});
//                 console.log(`Found ${products.length} products to revert.`);

//                 // Loop through each product and revert the image URL
//                 for (const product of products) {
//                     if (product.image.startsWith("https://cartnova.onrender.com/images/")) {
//                         // Replace the URL back to the original
//                         const originalImageUrl = product.image.replace("https://cartnova.onrender.com/images/", "http://localhost:4000/images/" );
//                         product.image = originalImageUrl;
//                         await product.save(); // Save the reverted product
//                         console.log(`Reverted product ${product.id}: ${originalImageUrl}`);
//                     }
//                 }

//                 console.log("All image URLs reverted successfully.");
//             } catch (error) {
//                 console.error("Error reverting image URLs:", error);
//             } finally {
//                 // Close the connection
//                 mongoose.connection.close();
//             }
//         };

//         // Call the revert function
//         revertImageUrls();
//     })
//     .catch(err => {
//         console.error("MongoDB connection error:", err);
//     });
