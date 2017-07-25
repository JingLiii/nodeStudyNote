var http = require('http')

var server = http.createServer()

server.on('request', function(req, res) {
    // res.end('hello world')
    // 可以通过 req 请求对象的 url 属性来获取请求路径
    console.log('请求路径: ', req.url)

    // 不管怎么访问,都会自动加一个 /
    var url = req.url

    if (url === '/') {
        res.end('home index')
    } else if (url === '/a') {
        res.end('aaa index')
    } else if (url === '/about') {
        // 建议: 如果发送的数据是 HTML 格式字符串, 最好加入一个 Content Type 响应头
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })
        res.end('<h1>this is a h1 </h1>')
    }
})

server.listen(3000, function() {
    console.log('running...')
})