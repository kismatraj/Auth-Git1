const fs = require('fs');

module.exports = {
  readFileAsync: async function (path) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  },

  readFile: async function (path) {
    return fs.readFileSync(path, 'utf8');
  },
};
