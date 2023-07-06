const { v4: uuid } = require('uuid');

const Id = Object.freeze({
  makeId: () => uuid(),
});

console.log(Id.makeId());

module.exports = Id;
