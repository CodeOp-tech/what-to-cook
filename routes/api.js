var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");
const bcrypt = require("bcryptjs");
const salt = 2;
const jwt = require("jsonwebtoken");
const secretword = process.env.SECRETWORD;
const isUserLoggedIn = require("./guards/isUserLoggedIn");

router.use(bodyParser.json());

router.get("/", function (req, res, next) {
  res.send("welcome to the api");
});

//POST creates new user in DB, pwd is encrypted
router.post("/users/create", async (req, res, next) => {
  const { username, password } = req.body;
  //encrypt password
  const hash = bcrypt.hashSync(password, salt);
  try {
    await db(
      `insert into users (username, password) values ("${username}", "${hash}");`
    );
    res.status(200).send({ msg: "New user created" });
  } catch (err) {
    res.status(500).send({ msg: err });
  }
});

//POST user login, returns token
router.post("/users/login", async (req, res, next) => {
  const { username, password } = req.body;
  try {
    //find user in DB
    const results = await db(
      `select * from users where username='${username}'`
    );
    //if user found
    if (results.data.length) {
      console.log("User found, comparing password...");
      // compare inputed password with hash in db
      const passCorrect = await bcrypt.compare(
        password,
        results.data[0].password
      );
      // if pass correct pass token and userId to front end
      if (passCorrect) {
        let token = jwt.sign({ userId: results.data[0].id }, secretword);
        res.send({ msg: "User OK", token });
      } else {
        //pass not correct
        res.status(401).send({ msg: "Incorrect login details" });
      }
    } else {
      //user not found
      res.status(401).send({ msg: "Incorrect login details" });
    }
  } catch (err) {
    console.log(err);
  }
});

//GET user id and username if token already present in browser
router.get("/user", isUserLoggedIn, async (req, res) => {
  console.log("User ", req.userId, " is logged in");
  try {
    result = await db(
      `select id, username from users where id='${req.userId}';`
    );
    res.send(result.data);
  } catch (err) {
    res.status(400).send({ message: err });
  }
});

module.exports = router;
