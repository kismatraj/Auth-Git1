const app = require('./server');
require('./utils/server.config.util');

app.listen(process.env.PORT, process.env.HOSTNAME, () => {
  console.log(
    `Node Rest Api server is running at url http://${process.env.HOSTNAME}:${process.env.PORT}${process.env.API_ROUTE_VERSION}`
  );
});

/* Handling unhandled promise rejection  */
process.on('unhandledRejection', (err) => {
  console.log(`Error ${err}`);
  console.log(`${err.stack}`);
  console.log('-------------------------');
  // console.log('Shutting down the server due to unhandled promise rejection');
});
