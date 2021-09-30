const createError = require('http-errors');
const userService = require('../services/user.service');

module.exports = {
  get: async (req, res) => {
    res.status(201).json({
      success: true,
      message: 'User get service is up and running',
    });
  },

  register: async (req, res) => {
    const result = await userService.register(req.body);
    res.status(201).json({
      success: true,
      data: result,
    });
  },

  login: async (req, res) => {
    const login = await userService.login(req.body);
    if (!login) {
      throw new createError.Unauthorized('Wrong credentials');
    }
    res.status(201).json({
      success: true,
      accessToken: login,
    });
  },

  put: async (req, res) => {
    res.status(201).json({
      success: true,
      message: 'Put service is up and running',
    });
  },

  patch: async (req, res) => {
    res.status(201).json({
      success: true,
      message: 'Patch service is up and running',
    });
  },

  delete: async (req, res) => {
    res.status(201).json({
      success: true,
      message: 'Delete service is up and running',
    });
  },
};
