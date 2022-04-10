const Users = require('../../schemas/users');
const { s3upload, s3delete } = require('../../utils/s3/s3');
const { options } = require('../../config/mongooseOptions');

const setAvatarModel = async (req) => {
    try {
        const { avatarURL, id } = req.user;
        if (avatarURL) {
            s3delete(avatarURL);
        }
        const { Location } = await s3upload(req.file);
        return await Users.findByIdAndUpdate(
            id,
            { avatarURL: Location },
            { new: true }
        ).populate('posts', 'title');
    } catch (err) {
        throw new Error(err);
    }
};

module.exports = setAvatarModel;
