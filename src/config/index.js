require('dotenv').config()

module.exports = {
    port: process.env.PORT || 3000,
    version: process.env.APP_VERSION || '1.0.0',
    environment: process.env.NODE_ENV || 'development'
}