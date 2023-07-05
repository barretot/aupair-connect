/* application/post/add-post.js */
const makeProfile = require('../../domain/profile/index');

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

export default makeInsertProfile;
