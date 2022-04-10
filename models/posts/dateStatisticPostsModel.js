const Posts = require("../../schemas/posts");
const { query, options } = require("../../config/statisticsOption");

const dateStatisticPostsModel = async () => {
  try {
    const posts = await Posts.aggregate([query, options]);
    return posts;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = dateStatisticPostsModel;
