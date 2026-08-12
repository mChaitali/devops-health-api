const express = require('express');

const logger = require('./middleware/logger');
const healthRoute = require('./routes/health');

const app = express();

app.use(logger);

app.use('/health', healthRoute);

app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    error: 'Not Found'
  });
});

module.exports = { app };