const query = {
  $group: {
    _id: "$postDate",
    posts: { $sum: 1 },
  },
};

const options = {
  $project: {
    _id: false,
    date: "$_id",
    posts: true,
  },
};

module.exports = {
  query,
  options,
};
