const bcrypt = require('bcryptjs');
const Users = require('../../schemas/users');
require('dotenv').config();

const { SALT_VAL } = process.env;

const createUserModel = async (userData) => {
    try {
        const { password } = userData;
        const salt = await bcrypt.genSalt(+SALT_VAL);
        const hashedPassword = await bcrypt.hash(password, salt);
        return await Users.create({
            ...userData,
            password: hashedPassword,
        });
    } catch (err) {
        throw new Error(err);
    }
};

module.exports = createUserModel;
