const Posts = require("../../schemas/posts");
const options = require("../../config/mongooseOptions");

const getPostsModel = async ({ page }) => {
  try {
    options.paginationOpt.page = page;
    const posts = await Posts.paginate({}, options.paginationOpt);
    return posts;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = getPostsModel;
