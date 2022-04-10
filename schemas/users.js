const { Schema, SchemaTypes, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: [true, 'Name is required'],
        },
        lastName: {
            type: String,
            required: [true, 'Last Name is required'],
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
        },
        token: {
            type: String,
            default: null,
        },
        avatarURL: {
            type: String,
            default: null,
        },
        posts: [
            {
                type: SchemaTypes.ObjectId,
                ref: 'posts',
            },
        ],
    },
    {
        versionKey: false,
        toJSON: {
            virtuals: true,
            transform: function (_, ret) {
                delete ret._id;
                delete ret.password;
                delete ret.token;
                delete ret.email;
                return ret;
            },
        },
    }
);

userSchema.methods.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const Users = model('users', userSchema);

module.exports = Users;
