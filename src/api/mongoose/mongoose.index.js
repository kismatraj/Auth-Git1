const mongoose = require('mongoose');
require('../utils/server.config.util');

mongoose.connect(
  `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
);

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected to db');
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected to Db');
});

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  process.exit(0);
});

module.exports = mongoose;
