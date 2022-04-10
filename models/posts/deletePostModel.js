const Users = require("../../schemas/users");
const Posts = require("../../schemas/posts");
const { s3delete } = require("../../utils/s3/s3");

const deletePostModel = async (user, postId) => {
  try {
    const post = await Posts.findById(postId);
    if (post.images.length) {
      post.images.forEach(async (image) => {
        await s3delete(image);
      });
    }
    await Users.findByIdAndUpdate(
      { _id: user.id },
      {
        $pullAll: {
          posts: [post],
        },
      }
    )
      .then(async () => await Posts.findByIdAndDelete(postId))
      .catch((err) => {
        throw new Error(err);
      });
    return;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = deletePostModel;
