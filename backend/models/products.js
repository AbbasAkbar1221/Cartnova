// const mongoose = require("mongoose");

// const Product = mongoose.model("Product", {
//     id: {
//       type: Number,
//       required: true,
//     },
//     name: {
//       type: String,
//       required: true,
//     },
//     image: {
//       type: String,
//       required: true,
//     },
//     category: {
//       type: String,
//       required: true,
//     },
//     new_price: {
//       type: Number,
//       required: true,
//     },
//     old_price: {
//       type: Number,
//       required: true,
//     },
//     date: {
//       type: Date,
//       default: Date.now,
//     },
//     available: {
//       type: Boolean,
//       default: true,
//     },
//   });
  
// module.exports = Product;


const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id: {
      type: Number,
      required: true,
      unique: true, 
    },
    name: {
      type: String,
      required: true,
      index: "text",
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      index: true, 
    },
    new_price: {
      type: Number,
      required: true,
      index: true, 
    },
    old_price: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
      index: true, 
    },
    available: {
      type: Boolean,
      default: true,
      index: true, 
    },
  });

// Create Indexes Manually
productSchema.index({ name: "text" }); 
productSchema.index({ category: 1 }); 
productSchema.index({ new_price: 1 });
productSchema.index({ date: -1 }); 
productSchema.index({ available: 1 });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
