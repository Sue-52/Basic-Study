const methods = require("methods");
// const pathRegexp = require("path-to-regexp");
const Layer = require("./layer");

function Router() {
  // 路由记录栈
  this.stack = [];
};

methods.forEach(method => {
  Router.prototype[method] = function (path, handler) {
    const layer = new Layer(path, handler);
    layer.methods = method;
    this.stack.push(layer);
  };
})


Router.prototype.handler = function (req, res) {
  let { pathname } = new URL(req.url, 'http://locathost:3000')
  const method = req.method.toLowerCase();

  const route = this.stack.find(layer => {
    const match = layer.match(pathname);
    if (match) {
      req.params = req.params || {};
      Object.assign(req.params, layer.params)
    }
    return match && layer.methods === method
  });

  if (route) {
    return route.handler(req, res);
  }
  res.end("404 Not Found")
};

module.exports = Router;