// fs-stat 可以用来获取一个路径信息
var fs = require('fs')
var moment = require('moment')

fs.stat('./data', function (err, stats) {
  if(err){
    throw err
  }
  if(stats.isFile()){
    console.log('是文件')
    console.log('文件大小', stats.size)
    console.log(moment(stats.mtime).format('YYYY-MM-DD HH:mm:ss'))
  }else if(stats.isDirectory()){
    console.log('是目录')
    console.log('目录大小', stats.size)
  }
})