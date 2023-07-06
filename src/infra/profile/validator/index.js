const postSchema = require('./profileSchema');

const validator = async (payload) => {
  const checkSchema = await postSchema.isValid(payload);

  if (!checkSchema) {
    return { error: 'Error schema' };
  }

  return checkSchema;
};

module.exports = validator;
