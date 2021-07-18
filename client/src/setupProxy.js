const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/api/details", { target: "http://localhost:5000" }));
};

