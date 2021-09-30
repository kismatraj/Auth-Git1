const apiRouter = require('express').Router();
const rootRoute = require('./root.route');
const userRoute = require('./user.route');
const newRoute = require('./newRoute.route');

apiRouter.use('/', rootRoute);
apiRouter.use('/user', userRoute);

apiRouter.use('/new-route', newRoute);

module.exports = apiRouter;
