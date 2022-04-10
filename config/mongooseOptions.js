require('dotenv').config();

const { POSTS_PER_PAGE } = process.env;

const authorParams = ['firstName', 'lastName', 'avatarURL'];

const findOpt = {
    match: { $meta: 'textScore' },
};

const labelsPagination = {
    totalDocs: 'totalPosts',
    limit: false,
    page: 'currentPage',
    nextPage: false,
    prevPage: false,
    totalPages: 'totalPages',
    pagingCounter: false,
    meta: false,
    hasPrevPage: 'previusPage',
    hasNextPage: 'nextPage',
};

const paginationOpt = {
    limit: POSTS_PER_PAGE,
    populate: {
        path: 'author',
        select: authorParams,
    },
    customLabels: labelsPagination,
};

const statQuery = {
    $group: {
        _id: '$postDate',
        posts: { $sum: 1 },
    },
};

const statOpt = {
    $project: {
        _id: false,
        date: '$_id',
        posts: true,
    },
};

const options = { findOpt, paginationOpt, statOpt, statQuery, authorParams };

module.exports = options;
