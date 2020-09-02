var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");
const bcrypt = require("bcryptjs");
const salt = 2;
const jwt = require("jsonwebtoken");
const secretword = process.env.SECRETWORD;
const isUserLoggedIn = require("./guards/isUserLoggedIn");
const checkUserExists = require("./guards/checkUserExists");

router.use(bodyParser.json());

router.get("/", function (req, res, next) {
  res.send("welcome to the api");
});

//POST creates new user in DB, pwd is encrypted
router.post("/users/create", checkUserExists, async (req, res, next) => {
  const { username, password } = req.body;
  //encrypt password
  const hash = bcrypt.hashSync(password, salt);
  try {
    await db(
      `insert into users (username, password) values ("${username}", "${hash}");`
    );
    res.status(200).send({ msg: "ok" });
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
      //console.log(process.env.SECRETWORD);
      // compare inputed password with hash in db
      const passCorrect = await bcrypt.compare(
        password,
        results.data[0].password
      );
      // if pass correct pass token and userId to front end
      if (passCorrect) {
        let token = jwt.sign({ userId: results.data[0].id }, secretword);
        res.send({ msg: "User OK", userId: results.data[0].id, token });
      } else {
        //pass not correct
        res.status(401).send({ msg: "Incorrect password" });
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
    res.status(400).send({ msg: err });
  }
});

//POST favourite recipe
router.post("/favourites", isUserLoggedIn, async (req, res) => {
  const { recipeId, image, title } = req.body;
  try {
    await db(
      `insert into favourites (userId, recipeId, image, title) values ('${req.userId}', '${recipeId}', '${image}', '${title}');`
    );
    res.status(200).send({ msg: "Favourite recipe inserted!" });
  } catch (err) {
    res.status(400).send({ msg: err });
  }
});

// GET favourite recipes for logged in user
router.get("/favourites/all", isUserLoggedIn, async (req, res) => {
  try {
    results = await db(`select * from favourites where userId='${req.userId}'`);
    res.status(200).send(results.data);
  } catch (err) {
    res.status(400).send({ msg: err });
  }
});

//check if recipe is favourite for logged in user
router.get("/favourites/:recipeId", isUserLoggedIn, async (req, res) => {
  try {
    results = await db(
      `select * from favourites where userId='${req.userId}' and recipeId ='${req.params.recipeId};'`
    );
    if (results.data.length) {
      res.status(200).send(results.data);
    } else {
      res.status(200).send({ msg: "Not a favourite" });
    }
  } catch (err) {
    res.status(400).send({ msg: err });
  }
});

//DELETE favourite recipe
router.delete("/favourites", isUserLoggedIn, async (req, res) => {
  const { recipeId } = req.body;
  try {
    await db(
      `delete from favourites where userId='${req.userId}' and recipeId='${recipeId}';`
    );
    res.status(200).send({ msg: "favourite removed" });
  } catch (err) {
    res.status(400).send({ msg: "error, nothing removed" });
  }
});

//get all categories for a user
router.get("/categories", isUserLoggedIn, async (req, res) => {
  try {
    results = await db(`select * from categories where userId='${req.userId}'`);
    res.status(200).send(results.data);
  } catch (err) {
    res.status(400).send({ msg: err });
  }
});

// post new category for a user
router.post("/categories", isUserLoggedIn, async (req, res) => {
  const { title } = req.body;
  try {
    await db(
      `insert into categories (userId, title) values ('${req.userId}', '${title}');`
    );
    res.status(200).send({ msg: "Category inserted!" });
  } catch (err) {
    res.status(400).send({ msg: err });
  }
});

//add favourite to category
router.put("/favourites/:id", isUserLoggedIn, async (req, res) => {
  const { categoryId } = req.body;
  const { id } = req.param;
  try {
    await db(
      `update favourites set categoryId='${categoryId}'  where id='${id}'; `
    );
    res.status(200).send({ msg: "Favourite recipe inserted into category!" });
  } catch (err) {
    res.status(400).send({ msg: err });
  }
});

module.exports = router;
