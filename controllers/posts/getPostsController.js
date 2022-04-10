const { getPostsModel } = require("../../models");
const { OK } = require("../../common/constants");

const getPostsController = async (req, res, next) => {
  try {
    const posts = await getPostsModel(req.params);
    return res.json({
      status: "succsess",
      code: OK,
      posts,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getPostsController;
