// const ajv = require('../../utils/ajv.util');

const userSchema = {
  type: 'object',
  properties: {
    email: { type: 'string', format: 'email' },
    password: { type: 'string', format: 'password' },
  },
  required: ['email', 'password'],
  additionalProperties: false,
};

// module.exports = ajv.compile(userSchema);
module.exports = userSchema;
