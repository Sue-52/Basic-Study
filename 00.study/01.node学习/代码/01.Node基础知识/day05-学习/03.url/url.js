const url = require("url");
// console.log(url);
// {
//   Url: [Function: Url],
//   parse: [Function: urlParse],
//   resolve: [Function: urlResolve],
//   resolveObject: [Function: urlResolveObject],
//   format: [Function: urlFormat],
//   URL: [class URL],
//   URLSearchParams: [class URLSearchParams],
//   domainToASCII: [Function: domainToASCII],
//   domainToUnicode: [Function: domainToUnicode],
//   pathToFileURL: [Function: pathToFileURL],
//   fileURLToPath: [Function: fileURLToPath]
// }

const obj = url.parse("http://www.baidu.com?name=cc&age=18");
console.log(obj);
