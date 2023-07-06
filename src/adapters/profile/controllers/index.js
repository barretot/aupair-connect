const { insertProfile } = require('../../../useCases/profile');
const makePostProfile = require('./postProfile');

// Injection
const postProfile = makePostProfile({ insertProfile });

const postController = Object.freeze({
  postProfile,
});

module.exports = postController;
