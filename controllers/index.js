const getUserDetailsController = require('./users/getUserDetailsController');
const registrationUserController = require('./users/registrationUserController');
const loginUserController = require('./users/loginUserController');
const uppdateUserController = require('./users/updateUserController');
const setUserAvatarController = require('./users/setUserAvatarController');
const logOutUserController = require('./users/logOutUserController');
const getAccessTokenController = require('./users/getAccessTokenController');
const refreshTokenController = require('./users/refreshTokenController');

const getPostsController = require('./posts/getPostsController');
const getPostInfoController = require('./posts/getPostInfoController');
const addPostsController = require('./posts/addPostsController');
const deletePostController = require('./posts/deletePostController');
const updatePostController = require('./posts/updatePostController');
const changePostImageController = require('./posts/changePostImageController');
const dateStatisticPostsController = require('./posts/dateStatisticPostsController');
const findPostsController = require('./posts/findPostsController');

module.exports = {
    getUserDetailsController,
    registrationUserController,
    loginUserController,
    uppdateUserController,
    setUserAvatarController,
    logOutUserController,
    getAccessTokenController,
    refreshTokenController,

    getPostsController,
    getPostInfoController,
    addPostsController,
    deletePostController,
    updatePostController,
    changePostImageController,
    dateStatisticPostsController,
    findPostsController,
};
