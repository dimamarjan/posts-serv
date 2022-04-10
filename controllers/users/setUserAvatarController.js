const { setAvatarModel } = require("../../models");
const idChecker = require("../../utils/checker/idChecker");
const { OK, UNAUTH } = require("../../common/constants");

const setUserAvatarController = async (req, res, next) => {
  try {
    const respData = idChecker(req);
    if (respData) {
      const { user } = req;
      user.avatarURL = await setAvatarModel(req);
      return res.json({
        status: "succsess",
        code: OK,
        user,
      });
    }
    return res.status(UNAUTH).json({
      status: "error",
      code: UNAUTH,
      message: "Access not permitted",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = setUserAvatarController;
