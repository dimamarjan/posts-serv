const { updateUserModel } = require("../../models");
const passwordChecker = require("../../utils/checker/passwordChecker");
const idChecker = require("../../utils/checker/idChecker");
const { ACCEPTED, UNAUTH } = require("../../common/constants");
require("dotenv").config();

const uppdateUserController = async (req, res, next) => {
  try {
    const isInvalidId = idChecker(req);
    const isInvalidPass = await passwordChecker(req.user, req);
    if (!isInvalidId || !isInvalidPass) {
      return res.status(UNAUTH).json({
        status: "error",
        code: UNAUTH,
        message: "Access not permitted",
      });
    }
    const user = await updateUserModel(req.user.id, req.body);
    return res.status(ACCEPTED).json({
      status: "succsess",
      code: ACCEPTED,
      user,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = uppdateUserController;
