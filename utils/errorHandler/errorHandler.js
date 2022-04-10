const {
  BAD_REQ,
  NOT_FOUND,
  SERVER_ERR,
  UNAUTH,
} = require("../../common/constants");

const errorHandler = (err, res) => {
  if (err.name === "ValidationError") {
    return res
      .status(BAD_REQ)
      .json({ status: "error", code: BAD_REQ, message: err.message });
  }
  if (err.name === "TokenExpiredError") {
    return res.status(BAD_REQ).json({
      status: "error",
      code: BAD_REQ,
      message: "Token has expired",
    });
  }
  if (err.name === "JsonWebTokenError") {
    return res.status(UNAUTH).json({
      status: "error",
      code: UNAUTH,
      message: "Wrong token",
    });
  }
  if (err.message === NOT_FOUND || err.message === "Error: 404") {
    return res.status(NOT_FOUND).json({
      status: "error",
      code: NOT_FOUND,
      message: "Not found",
    });
  } else {
    return res.status(SERVER_ERR).json({
      status: "error",
      code: SERVER_ERR,
      message: err.message,
    });
  }
};

module.exports = errorHandler;
