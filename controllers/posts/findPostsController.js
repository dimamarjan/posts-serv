const { findPostsModule } = require('../../models');
const { OK } = require('../../common/constants');

const findPostsController = async (req, res, next) => {
    try {
        const posts = await findPostsModule(req.body);
        return res.status(OK).json({
            status: 'success',
            code: OK,
            posts,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = findPostsController;
