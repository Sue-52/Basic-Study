## HTTP 服务器

开启一个本地服务器需要 NodeJS 中的`http`核心模块

1. http --- 模块提供了搭建本地服务器的 API；

```js
// 引入 http 模块
const http = require("http");
```

2. 引入后利用`http.createServer()`方法创建服务器实例

```js
const server = http.createServer();
```

3. 然后给服务器实例绑定接收`request`的事情处理函数：

```js
server.on("request", (response, request) => {
  console.log(req.url); // 获取到请求路径
});
```

> 给服务器绑定接受请求的处理事件，当服务器接收到客户端发送的请求后，会调用后面的处理函数，处理函数接受两个参数，请求信息对性和响应信息对象

4. 绑定监听端口号，开启服务器：

```js
server.listen(3000,()=>{
  console。log("服务器启动成功：http://localhost:3000")
})
```

> 用来绑定监听端口号，可以传入第二个参数，当服务器启动成功后，触发后面的回调函数
