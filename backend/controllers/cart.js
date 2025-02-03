const Users = require("../models/users");

async function addToCart(req, res) {
  console.log("Add to cart", req.body.productId);
  let userData = await Users.findOne({ _id: req.user.id });
  userData.cartData[req.body.productId] += 1;
  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.json({
    success: true,
    message: "Added to cart",
  });
}

async function removefromcart(req, res) {
  console.log("Remove from cart", req.body.productId);
  let userData = await Users.findOne({ _id: req.user.id });
  if (userData.cartData[req.body.productId] > 0)
    userData.cartData[req.body.productId] -= 1;
  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.json({
    success: true,
    message: "Removed from cart",
  });
}

async function removeAllQuantities(req, res) {
  console.log("Delete from cart", req.body.productId);
  let userData = await Users.findOne({ _id: req.user.id });
  userData.cartData[req.body.productId] = 0;
  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.json({
    success: true,
    message: "Deleted from cart",
  });
}

async function getCart(req, res) {
  console.log("Get cart data");
  let userData = await Users.findOne({ _id: req.user.id });
  res.json(userData.cartData);
}

module.exports = { addToCart, removefromcart, removeAllQuantities, getCart };
