const Id = require('../../../infra/profile/Id');

const makeProfileDb = ({ makeDb }) => {
  const insert = async ({ id: _id = Id.makeId(), ...profileParams }) => {
    const db = await makeDb();

    await db.collection('profile').insertOne({ _id, ...profileParams });

    return { _id, ...profileParams };
  };

  return Object.freeze({
    insert,
  });
};
module.exports = makeProfileDb;
