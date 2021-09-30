module.exports = {
  get: async (req, res) => {
    res.status(201).json({
      success: true,
      message: 'Get service is up and running',
    });
  },

  post: async (req, res) => {
    res.status(201).json({
      success: true,
      message: 'Post service is up and running',
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
