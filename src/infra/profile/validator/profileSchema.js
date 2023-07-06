const Joi = require('joi');

const schema = Joi.object().keys({
  id: Joi.string().required().error(() => 'invalid or malformed input: id'),
  opportunity: Joi.string().required().error(() => 'invalid or malformed input: opportunity'),
  aupair: Joi.string().required().error(() => 'invalid or malformed input: aupair'),
  user: Joi.string().required().error(() => 'invalid or malformed input: user'),
});

module.exports = schema;

