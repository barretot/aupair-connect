const makeProfile = require('../../entities/profile/index');

const makeInsertProfile = ({
  profileDb,
}) => async (profileParams) => {
  const post = await makeProfile(profileParams);

  return profileDb.insert({
    id: post.getId(),
    opportunity: post.getOpportunity(),
    aupair: post.getAupair(),
    user: post.getUser(),
  });
};

module.exports = makeInsertProfile;
