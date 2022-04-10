const Posts = require("../../schemas/posts");
const authorParams = require("../../config/authorOptions");

const getPostInfoModule = async ({ id }) => {
  try {
    return await Posts.findById(id).populate("author", authorParams);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = getPostInfoModule;
