const Posts = require("../../schemas/posts");
const options = require("../../config/paginateOptions");

const getPostsModel = async ({ page }) => {
  try {
    options.page = page;
    const posts = await Posts.paginate({}, options);
    return posts.docs;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = getPostsModel;
