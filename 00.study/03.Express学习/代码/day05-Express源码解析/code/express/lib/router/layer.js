const pathRegexp = require("path-to-regexp");

function Layer(path, hamdler) {
  this.path = path;
  this.handler = hamdler;
  this.keys = [];
  this.regexp = pathRegexp(path, this.keys, {});
  this.params = {};
}

Layer.prototype.match = function (pathname) {
  const match = this.regexp.exec(pathname);
  // 添加req.params逻辑
  if (match) {
    this.keys.forEach((key, index) => {
      this.params[key.name] = match[index + 1]
    })
    return true;
  }
  return false;
}

module.exports = Layer;