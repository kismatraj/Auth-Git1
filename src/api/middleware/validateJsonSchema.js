const betterAjvErrors = require('@stoplight/better-ajv-errors');
const ajv = require('../utils/ajv.util');

function validateJsonSchema(jsonSchema) {
  return async (req, res, next) => {
    const validate = ajv.compile(jsonSchema);
    const valid = validate(req.body);

    if (!valid) {
      const rawError = validate.errors;
      const errors = betterAjvErrors(jsonSchema, rawError, {
        propertyPath: [],
        targetValue: req.body,
      });
      return res.status(400).json(errors);
    }
    next();
  };
}

module.exports = validateJsonSchema;
