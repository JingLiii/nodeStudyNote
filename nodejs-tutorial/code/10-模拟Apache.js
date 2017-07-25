var http = require('http')
var fs = require('fs')

var server = http.createServer()

server.on('request', function (req, res) {
  var url = req.url
  var filePath = '.' + url
  fs.readFile(filePath, function (err, data){
    if(err) {
      return res.end('404 Not Fund')
    }
    res.end(data)
  })
})

server.listen(3000, function () {
  console.log('server running 127.0.0.1:3000...')
})