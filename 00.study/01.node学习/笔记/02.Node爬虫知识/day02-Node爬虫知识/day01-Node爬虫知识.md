## day01-Node 爬虫知识

### `puppeteer` 学习和使用

**介绍：**

- `puppeteer` 一种无头浏览器，一个 Node 库
- `puppeteer`提供了一些列 API，通过 Chrome DevTools Protocol 协议控制 Chromium/Chromme 浏览器行为
- `puppeteer`默认情况下是以 headless 启动 Chrome 的， 可以通过参数控制启动界面的 Chrome
- `puppeteer`默认绑定的是 Chromium 最新版的，也可以设置别的版本
- `puppeteer`让我们不需要了解太多的底层 CDP 协议实现与浏览器的通信

**Headless Chrome:**

- `headless Chrome` 是一种无界面的环境中运行 Chrome 浏览器的方式
- 通过命令行或者程序语言操作 Chrome
- 无需人的干预，运行更稳定
- 在启动 Chrome 时添加参数 --headless，便可以 headless 模式启动 Chrome

**puppeteer 能做什么：**

- 生成页面的屏幕截图和 PDF。
- 抓取 SPA（单页应用程序）并生成预渲染内容（即“SSR”（服务器端渲染））。
- 自动化表单提交、UI 测试、键盘输入等。
- 创建最新的自动化测试环境。使用最新的 JavaScript 和浏览器功能，直接在最新版本的 Chrome 中运行您的测试。
- 捕获站点的时间线跟踪以帮助诊断性能问题。
- 测试 Chrome 扩展。

注意：

> Node 版本必须在 8 以上

**安装：**

```js
npm install --save puppeteer
```

**Puppeteer API 分层结构：**

![img](\day01-Node爬虫知识.assets\v2-f0f7c2390015845d1addabe4f816a8fc_720w.jpg)

- **`Browser`**： 对应一个浏览器实例，一个 Browser 可以包含多个 BrowserContext
- **`BrowserContext`**： 对应浏览器一个上下文会话，就像我们打开一个普通的 Chrome 之后又打开一个隐身模式的浏览器一样，BrowserContext 具有独立的 Session(cookie 和 cache 独立不共享)，一个 BrowserContext 可以包含多个 Page
- **`Page`**：表示一个 Tab 页面，通过 browserContext.newPage()/browser.newPage() 创建，browser.newPage() 创建页面时会使用默认的 BrowserContext，一个 Page 可以包含多个 Frame
- **`Frame`**: 一个框架，每个页面有一个主框架（page.MainFrame()）,也可以多个子框架，主要由 iframe 标签创建产生的
- **`ExecutionContext`**： 是 javascript 的执行环境，每一个 Frame 都一个默认的 javascript 执行环境
- **`ElementHandle`**: 对应 DOM 的一个元素节点，通过该该实例可以实现对元素的点击，填写表单等行为，我们可以通过选择器，xPath 等来获取对应的元素
- **`JsHandle`**：对应 DOM 中的 javascript 对象，ElementHandle 继承于 JsHandle，由于我们无法直接操作 DOM 中对象，所以封装成 JsHandle 来实现相关功能
- **`CDPSession`**：可以直接与原生的 CDP 进行通信，通过 session.send 函数直接发消息，通过 session.on 接收消息，可以实现 Puppeteer API 中没有涉及的功能
- **`Coverage`**：获取 JavaScript 和 CSS 代码覆盖率
- **`Tracing`**：抓取性能数据进行分析
- **`Response`**： 页面收到的响应
- **`Request`**： 页面发出的请求

**默认设置:**

1. `使用无头模式`：uppeteer 运行 Chromium 的 headless mode。如果想要使用完全版本的 Chromium，设置 'headless' option 即可。

```js
const browser = await puppeteer.launch({ headless: false });
```

2. `运行绑定的 Chromium 版本`:默认情况下，Puppeteer 下载并使用特定版本的 Chromium 以及其 API 保证开箱即用。 如果要将 Puppeteer 与不同版本的 Chrome 或 Chromium 一起使用，在创建 Browser 实例时传入 Chromium 可执行文件的路径即可

```js
const browser = await puppeteer.launch({ executablePath: "/path/to/Chrome" });
```
