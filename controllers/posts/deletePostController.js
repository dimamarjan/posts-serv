const { deletePostModel } = require("../../models");
const postChecker = require("../../utils/checker/postChecker");
const { OK, NOT_FOUND } = require("../../common/constants");

const deletePostController = async (req, res, next) => {
  try {
    const isPost = await postChecker(req);
    if (!isPost) {
      return res.status(NOT_FOUND).json({
        status: "error",
        code: NOT_FOUND,
        message: "Post not found",
      });
    }
    await deletePostModel(req.user, req.params.id);
    return res.status(OK).json({
      status: "succsess",
      code: OK,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = deletePostController;
