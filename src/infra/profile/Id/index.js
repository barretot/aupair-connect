const { v4: uuid, validate: uuidValidate } = require('uuid');

const Id = Object.freeze({
  makeId: uuid(),
  isValidId: uuidValidate(),
});

module.exports = Id;
