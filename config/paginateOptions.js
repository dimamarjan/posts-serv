require("dotenv").config();
const authorParams = require("./authorOptions");

const { POSTS_PER_PAGE } = process.env;

const labels = {
  totalDocs: "totalPosts",
  limit: false,
  page: "currentPage",
  nextPage: false,
  prevPage: false,
  totalPages: "totalPages",
  pagingCounter: false,
  meta: false,
  hasPrevPage: "previusPage",
  hasNextPage: "nextPage",
};

const options = {
  limit: POSTS_PER_PAGE,
  populate: {
    path: "author",
    select: authorParams,
  },
  customLabels: labels,
};

module.exports = options;
