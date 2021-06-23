let aaa = "123123123";
let bbb = "dsfasdfcxzv";

exports.aaa = aaa; // { aaa: "123123123" } 一个指向地址
module.exports.bbb = bbb; // { aaa: '123123123', bbb: 'dsfasdfcxzv' }
// 系统默认设置了：exports = module.exports;
// exports = { user: "zs" };  // 无法获取到该元素 exports.属性名 = 值

//=========
// module.exports = { user: "zs" }; // 将前两个的指向aaa\bbb的地址重新指向了user
module.exports.foo = { username: "hahah" };
module.exports.sue = { password: "123123" };
