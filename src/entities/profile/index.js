const buildMakeProfile = require('./profile');
const Id = require('../../infra/profile/Id');
const validator = require('../../infra/profile/validator');
const errors = require('../errors');
const { Either, left, right } = require('../../shared/either/index');

// Injection
const makeProfile = buildMakeProfile({
  Id,
  validator,
  Either,
  left,
  right,
  errors,
});
module.exports = makeProfile;
