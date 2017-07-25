var http = require('http')
var fs = require('fs')
var template = require('art-template')
var moment = require('moment')


var server = http.createServer()

server.on('request', function (req, res) {
  var url = req.url
  if (url === '/') {
    fs.readFile('./view/index.html', function (err, tplData) {
      if (err) {
        throw err
      }
      tplData = tplData.toString()
      getResult(function (err, result) {
        if (err) {
          throw err
        }
        var resHtml = template.compile(tplData)({
          files: result
        })
        res.end(resHtml)
      })
    })
  }
})

server.listen(3000, function () {
  console.log('running...')
})

function getResult(callback) {
  fs.readdir('../saa', function (err, files) {
    if (err) {
      // throw err
      return callback(err)
    }
    var dirArr = []
    var fileArr = []
    var count = 0
    files.forEach(function (item, index) {
      // item: a , b, node_modules
      fs.stat(item, function (err, stats) {
        if (err) {
          // throw err
          return callback(err)
        }
        if (stats.isFile()) {
          fileArr.push({
            type: 'file',
            name: item,
            mtime: moment(stats.mtime).format('YYYY-MM-DD HH:mm:ss')
          })
        } else if (stats.isDirectory()) {
          dirArr.push({
            type: 'dir',
            name: item,
            mtime: moment(stats.mtime).format('YYYY-MM-DD HH:mm:ss')
          })
        }
        count++
        if (count === files.length) {
          var result = dirArr.concat(fileArr)
          callback(null, result)
        }
      })
    })

  })
}





















































// 没有封装前的代码
// var http = require('http')
// var fs = require('fs')
// var template = require('art-template')
// var moment = require('moment')


// var server = http.createServer()

// server.on('request', function (req, res) {
//   var url = req.url
//   if (url === '/') {
//     fs.readFile('./view/index.html', function (err, tplData) {
//       if (err) {
//         throw err
//       }
//       tplData = tplData.toString()
//       fs.readdir('./', function (err, files) {
//         if (err) {
//           throw err
//         }
//         var dirArr = []
//         var fileArr = []
//         var count = 0
//         files.forEach(function (item, index) {
//           // item: a , b, node_modules
//           fs.stat(item, function (err, stats) {
//             if (err) {
//               throw err
//             }
//             if (stats.isFile()) {
//               fileArr.push({
//                 type: 'file',
//                 name: item,
//                 mtime: moment(stats.mtime).format('YYYY-MM-DD HH:mm:ss')
//               })
//             } else if (stats.isDirectory()) {
//               dirArr.push({
//                 type: 'dir',
//                 name: item,
//                 mtime: moment(stats.mtime).format('YYYY-MM-DD HH:mm:ss')
//               })
//             }
//             count++
//             if (count === files.length) {
//               var result = dirArr.concat(fileArr)
//               var resHtml = template.compile(tplData)({
//                 files: result
//               })
//               res.end(resHtml)
//             }
//           })
//         })

//       })
//     })
//   }
// })

// server.listen(3000, function () {
//   console.log('running...')
// })