const app = require('./app');
const config = require('./config');

app.listen(config.port, () => {
  console.log(
    JSON.stringify({
      level: 'info',
      message: 'Server started',
      port: config.port
    })
  );
});