const idChecker = (req) => {
  if (req.params.id !== req.user.id) {
    return false;
  }
  return true;
};

module.exports = idChecker;
