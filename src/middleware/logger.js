module.exports = (req, res, next) => {
    const start = Date.now();
  
    res.on('finish', () => {
      console.log(
        JSON.stringify({
          method: req.method,
          path: req.originalUrl,
          status: res.statusCode,
          duration: `${Date.now() - start}ms`
        })
      );
    });
  
    next();
  };