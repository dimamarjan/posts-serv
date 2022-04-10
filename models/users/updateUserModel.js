const bcrypt = require("bcryptjs");
const Users = require("../../schemas/users");
require("dotenv").config();

const { SALT_VAL } = process.env;

const updateUserModel = async (userId, newUserData) => {
  try {
    if (newUserData.newPassword) {
      const salt = await bcrypt.genSalt(+SALT_VAL);
      const hashedPassword = await bcrypt.hash(newUserData.newPassword, salt);
      newUserData.password = hashedPassword;
    } else {
      delete newUserData.password;
    }
    return await Users.findByIdAndUpdate(
      { _id: userId },
      { ...newUserData },
      { new: true }
    );
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = updateUserModel;
