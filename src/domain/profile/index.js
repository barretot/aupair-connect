/* domain/post/post.js */
const buildMakePost =
  ({ Id, left, right, errors }) =>
  ({ id = Id.makeId(), opportunity, aupair, user } = {}) => {
    const { error } = validator({
      id,
      opportunity,
      aupair,
      user,
    });

    if (error) {
      return left(errors.profile.invalidProfile);
    }

    return right(
      Object.freeze({
        getId: () => id,
        getOpportunity: () => opportunity,
        getAupair: () => aupair,
        getUser: () => user,
      }),
    );
  };

module.exports = buildMakePost;
