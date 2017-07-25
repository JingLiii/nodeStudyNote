var fs = require('fs')

// ./data/a.txt 等价于 data/a.txt
// 如果是以 / 开头, 则是去当前脚本文件所属磁盘根目录去找该文件
// 注意: 这里先这样去认为, 其实也不对
fs.readFile('data/a.txt', function (err, data) {
  if(err) {throw err}
  console.log(data.toString())
})