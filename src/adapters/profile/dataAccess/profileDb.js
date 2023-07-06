const Id = require('../../../infra/profile/Id');

const { right } = require('../../../shared/either/index');

const makeProfileDb = ({ makeDb }) => {
  const insert = async ({ id: _id = Id.makeId(), ...profileParams }) => {
    const db = await makeDb();

    const result = await db
      .collection('profile')
      .insertOne({ _id, ...profileParams });
    const { _id: id, ...insertedInfo } = result.ops[0];
    return right({ id, ...insertedInfo });
  };

  return Object.freeze({
    insert,

  });
};
module.exports = makeProfileDb;
