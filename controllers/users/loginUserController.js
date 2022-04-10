const { getUserByEmailModel, updateTokenModel } = require('../../models');
const passwordChecker = require('../../utils/checker/passwordChecker');
const { NOT_FOUND, UNAUTH, OK } = require('../../common/constants');

const loginUserController = async (req, res, next) => {
    try {
        const user = await getUserByEmailModel(req.body);
        if (!user) {
            return res.status(NOT_FOUND).json({
                status: 'error',
                code: NOT_FOUND,
                message: 'User not found',
            });
        }
        const respData = await passwordChecker(user, req);
        if (respData) {
            const { token } = await updateTokenModel(user.id);
            return res.json({
                status: 'success',
                code: OK,
                token,
                user,
            });
        }
        return res.status(UNAUTH).json({
            status: 'error',
            code: UNAUTH,
            message: 'Access not permitted',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = loginUserController;
