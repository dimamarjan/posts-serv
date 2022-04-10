const passwordChecker = async (user, req) => {
  try {
    const passwordValidation = await user.isValidPassword(req.body.password);
    if (passwordValidation) {
      return true;
    }
    return false;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = passwordChecker;
