const makeProfile = require('../../entities/profile/index');

const makeInsertProfile = ({
  profileDb,
}) => (profileParams) => {
  const post = makeProfile(profileParams);

  return profileDb.insert({
    id: post.getId(),
    title: post.getTitle(),
    description: post.getDescription(),
    image: post.getImage(),
    tags: post.getTags(),
  });
};

module.exports = makeInsertProfile;
