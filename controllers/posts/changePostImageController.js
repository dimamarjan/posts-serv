const { changePostImageModel } = require('../../models');
const postChecker = require('../../utils/checker/postChecker');
const { NOT_FOUND, ACCEPTED } = require('../../common/constants');

const changePostImageController = async (req, res, next) => {
    try {
        const isPost = await postChecker(req);
        if (!isPost) {
            return res.status(NOT_FOUND).json({
                status: 'error',
                code: NOT_FOUND,
                message: 'Post not found',
            });
        }
        const post = await changePostImageModel(
            req.body,
            req.params.id,
            req.file
        );
        return res.status(ACCEPTED).json({
            status: 'success',
            code: ACCEPTED,
            post,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = changePostImageController;
