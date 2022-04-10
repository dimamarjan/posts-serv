const User = require('../../schemas/users');

const getUserDetailsModel = async (userId) => {
    try {
        return await User.findById(userId).populate('posts', 'title');
    } catch (err) {
        throw new Error(err);
    }
};

module.exports = getUserDetailsModel;
