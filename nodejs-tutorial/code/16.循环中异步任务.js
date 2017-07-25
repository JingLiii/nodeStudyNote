// 封装前
// var count = 0
// for (var i = 0; i < 5; i++) {
//   (function (i) {
//     setTimeout(function () {
//       console.log('i:' + i)
//       count++
//       if (count === 5) {
//         console.log('五个定时器执行完毕')
//       }
//     }, 1000);
//   })(i)
// }

// 封装函数
function testFuc(callback) {
  var count = 0
  for (var i = 0; i < 5; i++) {
    (function (i) {
      setTimeout(function () {
        console.log('i:' + i)
        count++
        if (count === 5) {
          callback()
        }
      }, 1000);
    })(i)
  }
}

function success() {
  console.log('完成了')
}
testFuc(success)

// 如果需要一个带有异步操作的函数, 一定是通过回调来拿结果
