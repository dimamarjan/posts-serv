const postChecker = require('../../utils/checker/postChecker');
const { getPostInfoModule } = require('../../models');
const { NOT_FOUND, ACCEPTED } = require('../../common/constants');

const getPostInfoController = async (req, res, next) => {
    try {
        const isPost = await postChecker(req);
        if (!isPost) {
            return res.status(NOT_FOUND).json({
                status: 'error',
                code: NOT_FOUND,
                message: 'Post not found',
            });
        }
        const post = await getPostInfoModule(req.params);
        return res.status(ACCEPTED).json({
            status: 'success',
            code: ACCEPTED,
            post,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = getPostInfoController;
