const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const postsSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    text: {
      type: String,
      required: [true, "Text is required"],
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    images: {
      type: Array,
      default: [],
    },
    postDate: {
      type: String,
      default: new Date().toISOString().split("T")[0],
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      virtuals: true,
      transform: function (_, ret) {
        delete ret._id;
        return ret;
      },
    },
  }
);

postsSchema.index({ title: "text", text: "text" });

postsSchema.plugin(mongoosePaginate);

const Posts = model("posts", postsSchema);

module.exports = Posts;
