const makeInsertProfile = require('./insertProfile');
const profileDb = require('../../adapters/profile/dataAccess/index');

// Injection
const insertProfile = makeInsertProfile({ profileDb });

const profileService = Object.freeze({
  insertProfile,
});

module.exports = profileService;
