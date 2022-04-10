const getUserDetailsModel = require('./users/getUserDetailsModel');
const createUserModel = require('./users/createUserModel');
const getUserByEmailModel = require('./users/getUserByEmailModel');
const updateUserModel = require('./users/updateUserModel');
const setAvatarModel = require('./users/setAvatarModel');
const updateTokenModel = require('./users/updateUserTokenModel');
const logOutUserModel = require('./users/logOutUserModel');

const getPostsModel = require('./posts/getPostsModel');
const getPostInfoModule = require('./posts/getPostInfoModule');
const addPostsModel = require('./posts/addPostsModel');
const deletePostModel = require('./posts/deletePostModel');
const updatePostModel = require('./posts/updatePostModel');
const changePostImageModel = require('./posts/changePostImageModel');
const dateStatisticPostsModel = require('./posts/dateStatisticPostsModel');
const findPostsModule = require('./posts/findPostsModule');

module.exports = {
    getUserDetailsModel,
    createUserModel,
    getUserByEmailModel,
    updateTokenModel,
    updateUserModel,
    setAvatarModel,
    logOutUserModel,

    getPostsModel,
    getPostInfoModule,
    addPostsModel,
    deletePostModel,
    updatePostModel,
    changePostImageModel,
    dateStatisticPostsModel,
    findPostsModule,
};
