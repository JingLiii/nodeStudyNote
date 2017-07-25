// 引包
var fs = require('fs')


// 读取文件
// 第一个参数: 读取文件的路径
// 第二个参数: 回调函数
//      err: 
//          如果操作失败:则err是一个错误对象, data是undefiend
//          如果读取成功: err是一个null, data是读取到的文件数据
//      data:
fs.readFile('../1.md', function(err, data) {
    // console.log(data)
    if (err) {
        // console.log('读取文件失败')
        console.log(err)
    } else {
        console.log('读取文件的回调函数执行了')
        console.log(data.toString())
    }
})