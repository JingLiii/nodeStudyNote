// require 是一个函数, 可以在 Node中的任何脚本中使用
// 作用就是用来加载模块的(加载解析执行JavaScript文件)
//      1. 解析执行被加载文件中的代码
//      2. 在Node中, 一个文件就是一个模块
//      3. 模块天生就是一个私有的作用域
//      4. 每个模块提供了一个接口对象, module.explorts
//          也就是说通过 require 会得到指定模块的接口对象: module.exports

var bModule = require('./b')
console.log(bModule)


var cExports = require('./c')
console.log(cExports.foo)
cExports.f()
    // console.log(foo)