const JWT = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');

module.exports = {
  signJwtSymmetric: async function (payload, options) {
    return new Promise((resolve, reject) => {
      JWT.sign(payload, process.env.JWT_KEY1, options, (error, token) => {
        if (error) {
          reject(error);
        }
        resolve(token);
      });
    });
  },

  signJwtAsymmetric: async function (payload, options) {
    return new Promise((resolve, reject) => {
      const privateKey = fs.readFileSync(
        path.join(path.resolve('./'), '/src/certs/private.pem'),
        'utf-8'
      );

      JWT.sign(payload, privateKey, options, (error, token) => {
        if (error) {
          reject(error);
        }
        resolve(token);
      });
    });
  },
};
