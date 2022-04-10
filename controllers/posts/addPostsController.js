const { addPostsModel } = require("../../models");
const { CREATED } = require("../../common/constants");

const addPostsController = async (req, res, next) => {
  try {
    const post = await addPostsModel(req);
    return res.status(CREATED).json({
      status: "succsess",
      code: CREATED,
      post,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = addPostsController;
