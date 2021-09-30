const { validationResult } = require('express-validator');

const validateRequestSchema = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Custom Error handling middleware
    return res.status(422).json({
      isRequestValid: false,
      error: errors.array(),
    });
  }
  next();
};

module.exports = validateRequestSchema;
