const Users = require("../../schemas/users");
const { s3upload, s3delete } = require("../../utils/s3/s3");

const setAvatarModel = async (req) => {
  try {
    const { avatarURL } = req.user;
    if (avatarURL) {
      s3delete(avatarURL);
    }
    const avatar = await s3upload(req.file);
    await Users.updateOne({ _id: req.user.id }, { avatarURL: avatar.Location });
    return avatar.Location;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = setAvatarModel;
