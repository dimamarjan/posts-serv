const { updateTokenModel } = require("../../models");
const { OK } = require("../../common/constants");

const refreshTokenController = async (req, res, next) => {
  try {
    const { token } = await updateTokenModel(req.user.id);
    return res.json({
      status: "success",
      code: OK,
      token,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = refreshTokenController;
