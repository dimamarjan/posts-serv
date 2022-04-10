const guard = require('./guard/guard');

const registrationValidate = require('./validators/users/registrationValidate');
const loginValidate = require('./validators/users/loginValidate');
const updateUserValidate = require('./validators/users/updateUserValidate');
const avatarValidate = require('./validators/users/avatarValidate');

const addPostValidate = require('./validators/posts/addPostValidate');
const updatePostValidate = require('./validators/posts/updatePostValidate');
const updatePostImageValidate = require('./validators/posts/updatePostImageValidate');
const findPostValidate = require('./validators/posts/findPostValidate');

const upload = require('./upload/upload');

module.exports = {
    guard,
    registrationValidate,
    loginValidate,
    updateUserValidate,
    avatarValidate,

    addPostValidate,
    updatePostValidate,
    updatePostImageValidate,
    findPostValidate,

    upload,
};
