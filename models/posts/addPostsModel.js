const { s3upload } = require("../../utils/s3/s3");
const Posts = require("../../schemas/posts");
const Users = require("../../schemas/users");
const authorParams = require("../../config/authorOptions");

const addPostsModel = async (req) => {
  try {
    const postData = req.body;
    const { user } = req;
    let images = [];
    if (req.files.length) {
      images = await Promise.all(
        req.files.map(async (image) => {
          const imgUrl = await s3upload(image);
          return imgUrl.Location;
        })
      );
    }
    const post = await Posts.create({
      ...postData,
      images,
    }).then(async (post) => {
      const newPost = await Posts.findByIdAndUpdate(
        { _id: post.id },
        {
          $set: {
            author: user,
          },
        },
        { new: true }
      ).populate("author", authorParams);
      await Users.findByIdAndUpdate(
        { _id: user.id },
        {
          $push: {
            posts: post,
          },
        }
      );
      return newPost;
    });
    return post;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = addPostsModel;
