// console.log('b.js 脚本文件被加载执行了')
var foo = 'bbb'

// global.foo = foo

console.log(module.exports)

module.exports.foo = foo

console.log(module.exports)

// 可以想象在每一个模块的结尾的都有这么一句代码, 
// return module.exports