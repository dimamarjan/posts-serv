const Posts = require('../../schemas/posts');
const options = require('../../config/mongooseOptions');

const updatePostModel = async (postChanges, postId) => {
    try {
        return await Posts.findByIdAndUpdate(postId, postChanges, {
            new: true,
        }).populate('author', options.authorParams);
    } catch (err) {
        throw new Error(err);
    }
};

module.exports = updatePostModel;
