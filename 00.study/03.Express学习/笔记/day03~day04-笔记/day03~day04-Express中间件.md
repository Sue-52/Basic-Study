# Express 中间件

## 概念解析：

Express 的最大特色，意识最重要的一个设计，就是中间件。一个 Express 应用，就是由许多的中间件完成的。

Ex：

![自来水厂的净水流程](./img/image-20210727144709748.png)

上图，自来水从获取水源到净化处理交给用户，中间经历了一系列的处理环节，我们称其中的每一个处理环节就是一个中间件。这样做的目的既提高了生产效率也保证了可维护性。

Express 中间件和 AOP **面向切面编程** 就是一个意思，就是都需要经过的一些步骤，**不去修改自己的代码，以此来扩展或者处理一些功能。**

什么是 AOP？

- 中文意思就是面向切面编程。

Ex：
农场的水果包装流水线一开始只有：`采摘`-`清洗`-`贴标签`

![水果包装流水线](./img/image-20210727145628812.png)

为了提高销量，要加上两道工序`分类`和`包装`但是又不能干扰原有的流程，同时如果没有增加收益可以随时撤销新增的工序。

![image-20210727145941304](./img/image-20210727145941304.png)

最后在流水线中的空袭插入两个工人去处理，形成`采摘 - 分类 - 清洗 - 包装 - 贴标签`的新流程，而且工人随时可以撤回。

AOP（Aspect Oriented Programming）面向切面编程：

- 将日志记录，性能统计，安全控制，事务处理，异常处理等代码从业务逻辑代码中划分出来，通过对这些行为的分离，我们希望可以将**它们独立到非指导业务逻辑的方法中，进而改变这些行为的时候不影响业务逻辑的代码**
- 利用 AOP 可以对业务逻辑的各个部分进行隔离，从而使得**业务逻辑各部分之间的耦合度降低**，提高**程序的可重用性**，同时**提高了开发的效率和可维护性。**

![image-20210727150735558](./img/image-20210727150735558.png)

总结：就是在原有的代码程序中，在程序生命周期或者横向流程中`加入/减去`一个或多个功能，不影响原有功能。

## Express 中的中间件

在 Express 中，中间件就是一个可以访问请求对象、响应对象和调用 next 方法的一个函数。

![image-20210727155620624](./img/image-20210727155620624.png)

在中间件函数中可以执行以下任何任务：

- 执行任何代码
- 修改 request 或者 response 响应对象
- 结束请求响应周期
- 调用用下一个中间件

注意：如果当前的中间件功能内有结束请求-相应周期，则必须调用 next（）控制权传递给下一个中间件功能。否则，该请求将被挂起。

## Express 中间件分类

在 Express 中应用程序可以使用以下类型的中间件：

- 应用程序级别中间件
- 路由级别中间件
- 错误处理中间件
- 内置中间件
- 第三方中间件

### 应用程序级别中间件

都是通过 express 实例进行调用的中间件

**不关心请求路径：**

```js
const express = require("express");
const app = express();

// req 请求对象
// res 请求响应
// next 下一个中间件
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});
```

**限定请求路径：**

```js
app.use("/user/:id", (req, res, next) => {
  console.log("Request Type:", req.method);
  next();
});
```

**限定请求方法 + 请求路径：**

```js
app.get("/user/:id", (req, res, next) => {
  res.send("User");
});
```

**多个处理函数：**

```js
app.use(
  "/user/:id",
  (req, res, next) => {
    console.log("Request Type:", req.method);
    next();
  },
  (req, res, next) => {
    console.log("Request URL:" + req.originalUrl);
  }
);
```

**为同一个路径定义多个处理中间件：**

```js
app.get(
  "/user/:id",
  (req, res, next) => {
    res.send("User");
    next();
  },
  (req, res, next) => {
    console.log("ID:" + req.params.id);
  }
);
```

要从路由器中间件堆栈中跳过其余中间件功能，请调用`next（'route'）` 将控制权传递给下一条路由。

> 注意：`next('route')` 仅在使用 `app.METHOD()` 或者 `router.METHOD()` 函数加载的中间件函数中有效。

**此示例显示了一个中间件子堆栈，该子堆栈处理对 `/user/:id` 路径的 GET 请求**

```js
// next("route"); 固定写法
app.get(
  "/user/:id",
  (req, res, next) => {
    if (req.params.id === "0") next("route");
    else next();
  },
  (req, res, next) => {
    res.send("regular");
  }
);
app.get("/user/:id", (req, res, next) => {
  res.send("special");
});
```

**中间件也可以在数组中声明为可重用。**
此示例显示了一个带有中间件的子堆栈的数组，该子堆栈处理对 `/user/:id` 路径的 `GET` 请求。

```js
function logOriginalUrl(req, res, next) {
  console.log("Request URL:" + req.originalUrl);
  next();
}
function logMethod(req, res, next) {
  console.log("Request Type:", req.method);
  next();
}
var logStuff = [logOriginalUrl, logMethod];
app.get("/user/:id", logStuff, (req, res, next) => {
  res.send("User Info");
});
```

### 路由级别中间件
