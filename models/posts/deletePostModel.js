const Users = require("../../schemas/users");
const Posts = require("../../schemas/posts");
const { s3delete } = require("../../utils/s3/s3");

const deletePostModel = async ({ id }, postId) => {
  try {
    const post = await Posts.findById(postId);
    if (post.images.length) {
      post.images.forEach(async (image) => {
        await s3delete(image);
      });
    }
    return await Users.findByIdAndUpdate(id, {
      $pullAll: {
        posts: [post],
      },
    })
      .then(async () => await Posts.findByIdAndDelete(postId))
      .catch((err) => {
        throw new Error(err);
      });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = deletePostModel;
