const { BAD_REQ, UNAUTH } = require("../../common/constants");

const userCheckerModel = async (req) => {
  try {
    if (Object.keys(req.params).length) {
      if (req.params.id !== req.user.id) {
        return {
          status: "error",
          code: BAD_REQ,
          message: "Incorrect user request",
        };
      }
    }
    if (Object.keys(req.body).length) {
      const passwordValidation = await req.user.isValidPassword(
        req.body.password
      );
      if (!passwordValidation) {
        return {
          status: "error",
          code: UNAUTH,
          message: "Email or password is wrong",
        };
      }
    }
    return;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = userCheckerModel;
