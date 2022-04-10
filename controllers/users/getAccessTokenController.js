const { OK } = require("../../common/constants");

const getAccessTokenController = async (req, res, next) => {
  try {
    return res.json({
      status: "success",
      code: OK,
      token: req.user.token,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getAccessTokenController;
