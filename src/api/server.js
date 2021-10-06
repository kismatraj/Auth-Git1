const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const createError = require('http-errors');
const path = require('path');
const errorHandlerMiddleware = require('./middleware/errorHandler.middleware');
const indexRouter = require('./routes/index.route');
const corsOptions = require('./middleware/cors.options');
require('./mongoose/mongoose.index');
require('./utils/server.config.util');

/* Initialize Express */
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Config CORS */
app.use(cors(corsOptions));

/* Configure Helmet */
app.use(helmet());
app.use(helmet.hidePoweredBy());

/* Config the Morgan */
app.use(morgan('dev'));

// Public resources
const publicPath = path.join(path.resolve('./'), '/src/public');
console.log(publicPath);
app.use(`${process.env.API_ROUTE_VERSION}/public`, express.static(publicPath));

/* Configure the api routes */
app.use(`${process.env.API_ROUTE_VERSION}`, indexRouter);

/* Handle All non existing routes */
app.use(async (req, res, next) => {
  next(createError.NotFound('Requested resource not available'));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      status: err.status || 500,
      message: err.message || 'Internal server error',
    },
  });
});

app.use((err, req, res, next) => {
  res.end(err.message);
});

/* Custom Error Handlers Middleware */
app.use(errorHandlerMiddleware);

module.exports = app;
