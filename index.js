const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

const morgan = require('morgan');
const path = require('path');
const rfs = require('rotating-file-stream');

const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

// body-parser
app.use(express.json());

// create a rotating write stream
const accessLogStream = rfs.createStream('access.log', {
    interval: '1d', // rotate daily
    path: path.join(__dirname, 'log')
});

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }));

// routes
moviesApi(app);

// Catch 404
app.use(notFoundHandler);

// Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function () {
    console.log(`Listening http://localhost:${config.port}`);
});
