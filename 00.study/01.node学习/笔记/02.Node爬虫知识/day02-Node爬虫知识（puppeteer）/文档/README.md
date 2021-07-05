# Introduction（介绍）

Puppeteer is a Node library which provides a high-level API to control Chromium or Chrome over the DevTools Protocol.

> Puppeteer 是一个 Node 库，它提供了一个高级 API 来通过 DevTools 协议控制 Chromium 或 Chrome。

The Puppeteer API is hierarchical and mirrors the browser structure.

> Puppeteer 默认以 headless 模式运行，但是可以通过修改配置文件运行“有头”模式。

`NOTE`： On the following diagram, faded entities are not currently represented in Puppeteer.

![](./imges/puppeteer.png)

- `Puppeteer` communicates with the browser using DevTools Protocol.
  > puppeteer 和网页进行交流使用的是 DevTools Protocol
- `Browser` instance can own multiple browser contexts.
  > 浏览器实例可以拥有多个浏览器上下文。
- `BrowserContext` instance defines a browsing session and can own multiple pages.
  > BrowserContext 实例定义了一个浏览会话，可以拥有多个页面。
- `Page` has at least one frame: main frame. There might be other frames created by iframe or frame tags.
  > 页面至少有一个框架:主框架。可能还有其他由 iframe 或 frame 标记创建的帧。
- `Frame` has at least one execution context - the default execution context - where the frame's JavaScript is executed. A Frame might have additional execution contexts that are associated with extensions.
  > 框架至少有一个执行上下文——默认的执行上下文——在这里框架的 JavaScript 被执行。一个框架可能有与扩展相关联的附加执行上下文。
- `Worker` has a single execution context and facilitates interacting with WebWorkers.
  > Worker 有一个单独的执行上下文，便于与 WebWorkers 交互。
