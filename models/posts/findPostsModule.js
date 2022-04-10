const Post = require('../../schemas/posts');
const options = require('../../config/mongooseOptions');

const findPostsModule = async ({ query }) => {
    try {
        return await Post.find(
            { $text: { $search: query } },
            options.findOpt
        ).sort(options.findOpt);
    } catch (err) {
        throw new Error(err);
    }
};

module.exports = findPostsModule;
