const Users = require("../../schemas/users");
const { NOT_FOUND } = require("../../common/constants");

const getUserByEmailModel = async ({ email }) => {
  try {
    return await Users.findOne({ email }).populate("posts");
  } catch {
    throw new Error(NOT_FOUND);
  }
};

module.exports = getUserByEmailModel;
