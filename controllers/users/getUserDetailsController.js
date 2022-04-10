const { getUserDetailsModel } = require('../../models');
const { NOT_FOUND, OK } = require('../../common/constants');

const getUserDetailsController = async (req, res, next) => {
    try {
        const user = await getUserDetailsModel(req.params.id);
        if (!user) {
            return res.status(NOT_FOUND).json({
                status: 'error',
                code: NOT_FOUND,
                message: 'User not found',
            });
        }
        return res.json({
            status: 'success',
            code: OK,
            user,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = getUserDetailsController;
