const Posts = require("../../schemas/posts");
const options = require("../../config/mongooseOptions");

const getPostInfoModule = async ({ id }) => {
  try {
    return await Posts.findById(id).populate("author", options.authorParams);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = getPostInfoModule;
