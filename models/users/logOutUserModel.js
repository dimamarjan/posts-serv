const User = require('../../schemas/users');

const logOutUserModel = async (userId) => {
    try {
        return await User.updateOne({ userId }, { token: null });
    } catch (err) {
        throw new Error(err);
    }
};

module.exports = logOutUserModel;
