const Post = require("../../schemas/posts");
const options = require("../../config/searchOptions");

const findPostsModule = async ({ query }) => {
  try {
    const post = await Post.find({ $text: { $search: query } }, options).sort(
      options
    );
    return post;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = findPostsModule;
