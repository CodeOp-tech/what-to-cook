const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretword = process.env.SECRETWORD;

//use this guard for every protected call
isUserLoggedIn = async (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (token) {
    jwt.verify(token, secretword, function (err, decoded) {
      if (err) res.send({ msg: err.message });
      else {
        const { userId } = decoded;
        req.userId = userId;
        next();
      }
    });
  } else {
    res.status(401).send({ msg: "Please log in" });
  }
};

module.exports = isUserLoggedIn;
