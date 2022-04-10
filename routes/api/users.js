const express = require('express');
const router = express.Router();
const {
    getUserDetailsController,
    registrationUserController,
    loginUserController,
    uppdateUserController,
    setUserAvatarController,
    logOutUserController,
    getAccessTokenController,
    refreshTokenController,
} = require('../../controllers');

const {
    guard,
    registrationValidate,
    loginValidate,
    updateUserValidate,
    avatarValidate,
    upload,
} = require('../../middlewares');

router.get('/logout', guard, logOutUserController);
router.get('/access-token', guard, getAccessTokenController);
router.get('/refresh-token', guard, refreshTokenController);
router.get('/:id', guard, getUserDetailsController);

router.post('/singup', registrationValidate, registrationUserController);
router.post('/login', loginValidate, loginUserController);
router.post(
    '/setavatar/:id',
    guard,
    upload.single('avatar'),
    avatarValidate,
    setUserAvatarController
);

router.patch('/update/:id', guard, updateUserValidate, uppdateUserController);

module.exports = router;
