const Posts = require("../../schemas/posts");
const authorParams = require("../../config/authorOptions");

const updatePostModel = async (postChanges, postId) => {
  try {
    const post = await Posts.findByIdAndUpdate(postId, postChanges, {
      new: true,
    }).populate("author", authorParams);
    return post;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = updatePostModel;
