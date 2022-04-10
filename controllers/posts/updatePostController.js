const { updatePostModel } = require('../../models');
const postChecker = require('../../utils/checker/postChecker');
const { ACCEPTED, NOT_FOUND } = require('../../common/constants');

const {} = require('../../common/constants');

const updatePostController = async (req, res, next) => {
    try {
        const isPost = await postChecker(req);
        if (!isPost) {
            return res.status(NOT_FOUND).json({
                status: 'error',
                code: NOT_FOUND,
                message: 'Post not found',
            });
        }
        const post = await updatePostModel(req.body, req.params.id);
        return res.status(ACCEPTED).json({
            status: 'success',
            code: ACCEPTED,
            post,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = updatePostController;
