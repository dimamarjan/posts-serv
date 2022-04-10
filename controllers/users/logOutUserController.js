const { ACCEPTED } = require('../../common/constants');
const { logOutUserModel } = require('../../models');

const logOutUserController = async (req, res, next) => {
    try {
        await logOutUserModel(req.user.id);
        return res.status(ACCEPTED).json({
            status: 'succsess',
            code: ACCEPTED,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = logOutUserController;
