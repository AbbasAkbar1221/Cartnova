require('dotenv').config();
const Users = require("../models/users");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

async function signUp(req, res){
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
  }

  async function login(req, res){
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
  }

  module.exports = { signUp, login };