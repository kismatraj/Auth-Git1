const createError = require('http-errors');
const userModel = require('../mongoose/models/user.model');
const JWT = require('../helper/jwt.helper');
require('../utils/server.config.util');

module.exports = {
  register: async (input) => {
    const { email, password } = input;
    if (!email || !password) {
      throw createError.BadRequest('Bad user input data');
    }
    const doesExits = await userModel.findOne({ email });
    if (doesExits) {
      throw createError.Conflict(
        `User with ${email} already exits. Try another`
      );
    }
    const user = await userModel({ email, password });
    const savedUser = await user.save();
    const accessToken = await JWT.signJwtSymmetric(savedUser.id);
    // const refreshToken = await signJwtSymmetric(savedUser.id);
    return accessToken;
  },

  login: async (input) => {
    const { email, password } = input;
    if (!email || !password) {
      throw createError.BadRequest('Bad user input data');
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      throw createError.Conflict(`User is not registered`);
    }
    const isMatch = await user.isValidPassword(password);
    if (!isMatch) {
      throw createError.Unauthorized('Wrong credentials');
    }
    const payload = { email: user.email, id: user.id };
    const options = {
      issuer: 'AuthApi',
      audience: 'localhost',
      algorithm: 'RS512',
      expiresIn: '1d',
    };
    const accessToken = await JWT.signJwtAsymmetric(payload, options);
    // const refreshToken = await signRefreshToken(user.email);

    return accessToken;
  },

  /* refreshToken: async (req, res, next) => {
    try {
      const { refreshToken } = req.body;
      if (!refreshToken) {
        throw createError.BadRequest('Invalid user request');
      }
      const userId = await verifyRefreshToken(refreshToken);
      const accessToken = await signAccessToken(userId);
      const refToken = await signRefreshToken(userId);

      res.status(201).json({
        accessToken,
        refreshToken: refToken,
      });
    } catch (error) {
      next(error);
    }
  }, */

  logout: () => true,
};
