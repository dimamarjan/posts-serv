const { OK } = require("../../common/constants");
const { dateStatisticPostsModel } = require("../../models");

const dateStatisticPostsController = async (req, res, next) => {
  try {
    const statistics = await dateStatisticPostsModel();
    return res.status(OK).json({
      status: "success",
      code: OK,
      statistics,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = dateStatisticPostsController;
