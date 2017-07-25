var http = require('http')
var fs = require('fs')


var server = http.createServer()

server .on ('request', function (req, res) {
  var url = req.url
  if ( url === '/'){
    fs.readFile('./view/index.html', function (err, data) {
      if (err) {throw err}
      res.end(data)
    })
  }else if (url === '/files') {
    fs.readdir('./', function (err, files) {
      if(err) {throw err}
      res.end(JSON.stringify(files))
    })
  } else if ( url === '/node_modules/jquery/dist/jquery.min.js'){
    fs.readFile('./node_modules/jquery/dist/jquery.min.js', function (err, data) {
      if(err) {throw err}
      res.end(data)
    })
  }
})

server.listen(3000, function () {
  console.log('running...')
})