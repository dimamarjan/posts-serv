const { createUserModel, getUserByEmailModel } = require("../../models");
const { CREATED, CONFLICT } = require("../../common/constants");

const registrationUserController = async (req, res, next) => {
  try {
    const conflictUser = await getUserByEmailModel(req.body);
    if (conflictUser) {
      return res.status(CONFLICT).json({
        status: "error",
        code: CONFLICT,
        message: "Email already in use",
      });
    }
    const user = await createUserModel(req.body);
    return res.status(CREATED).json({
      status: "succsess",
      code: CREATED,
      user,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = registrationUserController;
