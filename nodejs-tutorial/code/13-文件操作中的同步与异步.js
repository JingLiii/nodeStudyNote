var fs = require('fs')

// console.log('111')

// 异步任务, 无法控制流程
// fs.readFile('./data/a.txt', function (err, data) {
//   console.log('2222')
//   if (err) {
//     throw err
//   }
//   console.log(data.toString())
// })


// fs.readFile('./data/b.txt', function (err, data) {
//   console.log('333')
//   if (err) {
//     throw err
//   }
//   console.log(data.toString())
// })


// fs.readFile('./data/c.txt', function (err, data) {
//   console.log('44444')
//   if (err) {
//     throw err
//   }
//   console.log(data.toString())
// })

// 如果想要控制流程, 只能回调套回调
// fs.readFile('./data/a.txt', function (err, data) {
//   console.log('2222')
//   if (err) {
//     throw err
//   }
//   console.log(data.toString())
//   fs.readFile('./data/b.txt', function (err, data) {
//     console.log('333')
//     if (err) {
//       throw err
//     }
//     console.log(data.toString())
//     fs.readFile('./data/c.txt', function (err, data) {
//       console.log('44444')
//       if (err) {
//         throw err
//       }
//       console.log(data.toString())
//     })
//   })
// })


// 同步操作
// var dataA = fs.readFileSync('./data/a.txt').toString()
// console.log('222')
// console.log(dataA)
// var dataB = fs.readFileSync('./data/b.txt').toString()
// console.log('333')
// console.log(dataB)
// var dataC = fs.readFileSync('./data/c.txt').toString()
// console.log('4444')
// console.log(dataC)
// console.log('55555')

// 关于文件操作中的同步与异步: 有限使用异步操作
/*
关于文件操作中的同步和异步, 优先使用异步操作
异步操作都是通过一个回调函数来获取异步操作结果
  异步操作一般会在回调函数第一个参数中提供一个err对象
    如果操作成功, err就是null
    如果操作失败, err就是错误对象
    所以在异步操作中, 优先判断err是否出错
    在异步操作中, 无法通过try-catch来捕获异常
同步操作则和普通代码一样, 像接收变量返回值一样去接收操作结果
  同步操作中使用trycatch捕获异常
*/

// 异步操作中无法通过try-catch来捕获异常
// try {
//   fs.readFile('./aaaaa.txt', function (err, data) {
//     console.log(data)
//   })
// } catch (error) {
//   console.log('读取文件失败')
// }

// 同步操作使用trycatch捕获异常
try {
  var dataA = fs.readFileSync('./data/asss.txt').toString()
  console.log(dataA)
} catch (error) {
  console.log(error)
}
console.log('ddd')