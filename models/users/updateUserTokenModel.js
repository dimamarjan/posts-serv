const jwt = require("jsonwebtoken");
const User = require("../../schemas/users");
require("dotenv").config();

const { JWT_SECRET, JWT_EXP } = process.env;

const updateTokenModel = async (userId) => {
  try {
    const token = jwt.sign({ id: userId }, JWT_SECRET, {
      expiresIn: JWT_EXP,
    });
    await User.updateOne({ _id: userId }, { token });
    return token;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = updateTokenModel;
