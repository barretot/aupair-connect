const Yup = require('yup');

const schema = Yup.object().shape({
  opportunity: Yup.string().required(),
  aupair: Yup.string().required(),
  user: Yup.string().required(),
});

module.exports = schema;

