const db = require("../../model/helper");

checkUserExists = async (req, res, next) => {
  const { username } = req.body;
  try {
    const nameExists = await db(
      `select * from users where username="${username}";`
    );
    console.log(nameExists.data.length);
    if (nameExists.data.length)
      return res
        .status(409)
        .send({ msg: "User with these credentials exists" });
  } catch (err) {
    res.status(409).send({ msg: err });
  }
  next();
};

module.exports = checkUserExists;
