const Posts = require("../../schemas/posts");

const postChecker = async (req) => {
  try {
    const postId = req.params.id;
    const { user } = req;
    const post = await Posts.findById(postId).populate("author", "id");
    if (!post || post.author.id !== user.id) {
      return false;
    }
    return true;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = postChecker;
