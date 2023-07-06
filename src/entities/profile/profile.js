const buildMakeProfile = ({
  Id,
  validator,
  left,
  right,
  errors,
}) => async ({
  id = Id.makeId(),
  opportunity,
  aupair,
  user,
} = {}) => {
  const isValid = await validator({
    id,
    opportunity,
    aupair,
    user,
  });

  if (!isValid) {
    return left(errors.profile.invalidProfile);
  }
  return Object.freeze({
    getId: () => id,
    getOpportunity: () => opportunity,
    getAupair: () => aupair,
    getUser: () => user,
  });
};

module.exports = buildMakeProfile;

