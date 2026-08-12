const express = require('express');
const router = express.Router();

const config = require('../config');

router.get('/', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: config.version,
    environment: config.environment
  });
});

module.exports = router;