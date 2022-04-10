const express = require("express");
const router = express.Router();

const {
  getPostsController,
  getPostInfoController,
  addPostsController,
  deletePostController,
  updatePostController,
  changePostImageController,
  dateStatisticPostsController,
  findPostsController,
} = require("../../controllers");

const {
  guard,

  addPostValidate,
  updatePostValidate,
  updatePostImageValidate,
  findPostValidate,

  upload,
} = require("../../middlewares");

router.post("/", guard, findPostValidate, findPostsController);

router.get("/page/:page", guard, getPostsController);

router.post(
  "/add",
  guard,
  upload.any("images"),
  addPostValidate,
  addPostsController
);

router.get("/stat", guard, dateStatisticPostsController);

router
  .get("/:id", guard, getPostInfoController)
  .delete("/:id", guard, deletePostController)
  .patch("/:id", guard, updatePostValidate, updatePostController)
  .put(
    "/:id",
    guard,
    upload.single("image"),
    updatePostImageValidate,
    changePostImageController
  );

module.exports = router;
