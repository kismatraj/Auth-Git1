const corsOptions = {
  allowedHeaders: [
    'origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 200,
  origin: 'http://localhost:4000/',
};
module.exports = corsOptions;
