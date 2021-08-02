## Express 源码解析

目录结构：

```
| -- middleware  # 中间件文件夹
| | -- init.js
| | -- query.js
| -- router  # 路由文件夹
| | -- index.js
| | -- layer.js
| | -- route.js
| -- application.js  #
| -- express.js  #
| -- request.js  # 请求
| -- response.js  # 响应
| -- utils.js  # 部分功能
| -- view.js  # 模板渲染功能
```

### 快速体验

express.js

```js
// 原生请求
const http = require("http");
const url = require("url");

// 路由定义
const routes = [];

function createApplication() {
  return {
    get(route, handler) {
      routes.push({
        methods: "get",
        route,
        handler,
      });
    },
    listen(...args) {
      const server = http.createServer((req, res) => {
        let { pathname } = new URL(req.url, "http://locathost:3000");
        console.log(pathname);
        const method = req.method.toLowerCase();
        const route = routes.find(
          (item) => item.route === pathname && item.methods === method
        );
        if (route) {
          return route.handler(req, res);
        }
        res.end("404 Not Found");
      });
      server.listen(...args);
    },
  };
}

module.exports = createApplication;
```

app.js

```js
const express = require("./express");
const app = express();

app.get("/", (req, res) => {
  res.end("get /");
});

app.get("/index", (req, res) => {
  res.end("get /index");
});

app.listen(3000, () => {
  console.log("Server running at Http://localhost:3000");
});
```

### 抽取 App 模块

创建 application.js 并将 express.js 中的带吧抽取过去

application.js

```js
// 原生请求
const http = require("http");
const url = require("url");
function App() {
  this.routes = [];
}

// 挂在到App函数的原型上，this指向App函数
App.prototype.get = function (route, handler) {
  this.routes.push({
    methods: "get",
    route,
    handler,
  });
};

App.prototype.listen = function (...args) {
  const server = http.createServer((req, res) => {
    let { pathname } = new URL(req.url, "http://locathost:3000");
    console.log(pathname);
    const method = req.method.toLowerCase();
    const route = this.routes.find(
      (item) => item.route === pathname && item.methods === method
    );
    if (route) {
      return route.handler(req, res);
    }
    res.end("404 Not Found");
  });
  server.listen(...args);
};

module.exports = App;
```

express.js

```js
const App = require("./application");

function createApplication() {
  const app = new App();
  return app;
}

module.exports = createApplication;
s;
```

### 提取路由模块

将 application.js 中的路由拆分到单独的 router 文件夹中

router 文件夹的 index.js

```js
const url = require("url");
function Router() {
  // 路由记录栈
  this.stack = [];
}

Router.prototype.get = function (path, handler) {
  this.stack.push({
    methods: "get",
    path,
    handler,
  });
};
Router.prototype.handler = function (req, res) {
  let { pathname } = new URL(req.url, "http://locathost:3000");
  const method = req.method.toLowerCase();
  const route = this.stack.find(
    (item) => item.path === pathname && item.methods === method
  );
  if (route) {
    return route.handler(req, res);
  }
  res.end("404 Not Found");
};

module.exports = Router;
```

application.js

```js
// 原生请求
const http = require("http");
const Router = require("./router");

function App() {
  this._router = new Router();
  //
}

App.prototype.get = function (route, handler) {
  this._router.get(route, handler);
};

App.prototype.listen = function (...args) {
  const server = http.createServer((req, res) => {
    this._router.handler(req, res);
  });
  server.listen(...args);
};

module.exports = App;
```

### 处理不同的请求方法

通过 methods 包获取常用的路由并进行遍历处理

application.js

```js
const methods = require("methods");

methods.forEach((method) => {
  App.prototype[method] = function (route, handler) {
    this._router[method](route, handler);
  };
});
```

router 文件夹下的 index.js

```js
const methods = require("methods");

methods.forEach((method) => {
  Router.prototype[method] = function (path, handler) {
    this.stack.push({
      methods: method,
      path,
      handler,
    });
  };
});
```

### 更强大的路由路径匹配模式-基本实现

router 文件夹下的 index.js

```js
const pathRegexp = require("path-to-regexp");

Router.prototype.handler = function (req, res) {
  let { pathname } = new URL(req.url, "http://locathost:3000");
  const method = req.method.toLowerCase();

  const route = this.stack.find((item) => {
    const keys = [];
    const regexp = pathRegexp(item.path, keys, {});
    const match = regexp.exec(pathname);
    return match && item.methods === method;
  });

  if (route) {
    return route.handler(req, res);
  }
  res.end("404 Not Found");
};
```

### 处理动态路由路径参数

app.js

```js
app.get("/users/:userId/books/:bookId", (req, res) => {
  console.log(req.params);
  res.end("get /users/:userId/books/:bookId");
});
```

index.js 中的 handler 里

```js
// 添加req.params逻辑
if (match) {
  req.params = req.params || {};
  keys.forEach((key, index) => {
    req.params[key.name] = match[index + 1];
  });
}
```

### 提取 Layer 处理模块

将路由匹配模块封装到 layer 中

router 文件下的 index.js

```js
const methods = require("methods");
// const pathRegexp = require("path-to-regexp");
const Layer = require("./layer");

function Router() {
  // 路由记录栈
  this.stack = [];
}

methods.forEach((method) => {
  Router.prototype[method] = function (path, handler) {
    const layer = new Layer(path, handler);
    layer.methods = method;
    this.stack.push(layer);
  };
});

Router.prototype.handler = function (req, res) {
  let { pathname } = new URL(req.url, "http://locathost:3000");
  const method = req.method.toLowerCase();

  const route = this.stack.find((layer) => {
    const match = layer.match(pathname);
    if (match) {
      req.params = req.params || {};
      Object.assign(req.params, layer.params);
    }
    return match && layer.methods === method;
  });

  if (route) {
    return route.handler(req, res);
  }
  res.end("404 Not Found");
};

module.exports = Router;
```

layer.js

```js
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
      this.params[key.name] = match[index + 1];
    });
    return true;
  }
  return false;
};

module.exports = Layer;
```
