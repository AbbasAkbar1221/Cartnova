require('dotenv').config();
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

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

  module.exports = fetchuser;