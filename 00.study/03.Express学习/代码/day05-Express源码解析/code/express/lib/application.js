// 原生请求
const http = require("http");
const Router = require("./router")
const methods = require("methods")

function App() {
  this._router = new Router();
};

methods.forEach(method => {
  App.prototype[method] = function (route, handler) {
    this._router[method](route, handler)
  }
})

App.prototype.listen = function (...args) {
  const server = http.createServer((req, res) => {
    this._router.handler(req, res);
  });
  server.listen(...args)
}

module.exports = App;