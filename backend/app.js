const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const path = require('path');
const cors = require('cors');
const { log } = require('console');
const port = 4000;
const app = express();

//start video 5:52:22

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://abbasakbar:abbas@cluster0.o78ff.mongodb.net/cartnova?retryWrites=true&w=majority&appName=Cluster0')

//API creation

app.get('/', (req, res) => {
    res.send('Hello World');
});

//Image storage engine

const storage = multer.diskStorage({
    destination: './uploads/images',
    filename: (req, file, cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const uploads = multer({storage: storage});

//creating upload endpoint for image upload
app.use('/images', express.static(path.join(__dirname, 'uploads/images')));

app.post('/upload', uploads.single('product'), (req, res) => {
    console.log(req.file.filename);
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

//schema for creating product

const Product = mongoose.model('Product', {
    id:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    new_price:{
        type: Number,
        required: true
    },
    old_price:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    available:{
        type: Boolean,
        default: true
    }
});

app.post('/addproduct',async (req, res) => {
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1); //last element of array
        let last_product = last_product_array[0];
        id=last_product.id+1;
    }
    else{
        id=1;
    }
    const { name, image, category, new_price, old_price, available} = req.body;
    const product = new Product({id:id, name, image, category, new_price, old_price, available});
    console.log(product);
    await product.save();
    console.log('saved');
    res.json({
        success: true,
        name:req.body.name,
    });
});

//creating api for deleting product
app.post('/removeproduct',async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})

//creating api for getting all products
app.get('/allproducts', async (req, res) => {
    let products = await Product.find({});
    console.log("All products fetched");
    res.json(products);
});

app.listen(port, (error) => {
    if(!error){
        console.log(`Server is running on port: ${port}`);
    }
    else{
        console.log('Error:', error);
    }
});