var fs = require('fs')
var http = require('http')
var template = require('art-template')

// 1. 创建服务
var server = http.createServer()

// 2. 为server注册request 请求事件, 添加事件处理函数
server.on('request', function (req, res) {
  // 由于所有请求的入口都是 request 请求事件
  // 以及所有的请求处理函数都是
  // console.log(req.url)
  var url = req.url
  if (url === '/') {
    // 1. 得到模板字符串
    // 读文件的第二个参数可以指定编码
    // 如何指定的node会自动读取到二进制, 并转为字符串
    fs.readFile('./view/template.html', 'utf8', function (err, tplData) {
      if (err) {
        throw err
      }
      // res.end(tplData)g
      // 2. 得到数据
      fs.readFile('./data/data.json', 'utf8', function (err, data) {
        if(err){throw err}
        // 因为读文件, 读到的都是字符串, 我们需要得到一个对象
        data = JSON.parse(data)
        // 3. 模板引擎解析替换渲染
        var html = template.compile(tplData)(data)
        // 4. 将解析渲染完的字符串发送到客户端
        res.end(html)
      })

    })
  }
  // res.end('hello nodejs')
})

// 3. 绑定端口号, 启动服务
server.listen(3000, function () {
  console.log('running...')
})