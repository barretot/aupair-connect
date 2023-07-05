const makeInsertProfile = require('./insertProfile');
const profileDb = require('../../interfaces/post/dataAccess');

const insertProfile = makeInsertProfile({ profileDb });

const postService = Object.freeze({
  insertProfile,
  // editProfile,
  // listProfile,
});

module.exports = postService;
