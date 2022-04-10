const Posts = require("../../schemas/posts");
const options = require("../../config/mongooseOptions");

const dateStatisticPostsModel = async () => {
  try {
    return await Posts.aggregate([options.statQuery, options.statOpt]);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = dateStatisticPostsModel;
