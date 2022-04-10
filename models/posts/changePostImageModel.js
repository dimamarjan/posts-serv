const Posts = require('../../schemas/posts');
const { s3upload, s3delete } = require('../../utils/s3/s3');
const { NOT_FOUND } = require('../../common/constants');
const options = require('../../config/mongooseOptions');

const changePostImageModel = async ({ oldImage }, postId, image) => {
    try {
        const post = await Posts.findById(postId);
        const oldImageIndex = post.images.indexOf(oldImage);
        if (oldImageIndex >= 0) {
            s3delete(oldImage);
            const { Location } = await s3upload(image);
            post.images[oldImageIndex] = Location;
            const updatedPost = await Posts.findByIdAndUpdate(postId, post, {
                new: true,
            }).populate('author', options.authorParams);
            return updatedPost;
        }
        throw new Error(NOT_FOUND);
    } catch (err) {
        throw new Error(err);
    }
};

module.exports = changePostImageModel;
