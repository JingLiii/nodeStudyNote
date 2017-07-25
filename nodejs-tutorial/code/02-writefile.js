var fs = require('fs')


// 写文件
// 第一个参数: 文件路径
//      '如果没有会自动新建', 如果存在, 会自动覆盖
// 第二个参数: 写入数据
// 第三个参数: 回调函数, 
//      err: 成功为空, 失败为错误对象
fs.writeFile('./data/a.txt', '你好, Node.js', function(err) {
    if (err) {
        return console.log('写入文件失败')
    }
    console.log('写入文件成功')
})