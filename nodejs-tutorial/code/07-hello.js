var http = require('http')


// 1. 通过 http.createServer 创建一个服务, 得到一个server服务实例
var server = http.createServer()

var count = 0;
// 2. 为 server 设置 request 请求事件的请求处理函数
// request: 请求事件是所有请求的入口
//      也就是说所有的任务请求都会触发该事件, 然后执行对应的回调处理函数
//    第二个参数 callback 需要接收两个参数
//      Request: 
//          请求对象, 用来获取客户端的一些数据
//      Response:
//          响应对象: 用来给客户端发送响应的数据
//          res.write
//              write 可以写多次
//          res.end
//              write 之后一定要通过res.end结束响应
//              res.end 可以在结束响应的同时, 直接发送响应数据
server.on('request', function(req, res) {
    // res.end('hello world')
    // 会响应两次, 应为要请求一个 icon 

    // 一个请求对应一个响应, 发送多次响应式不管用的
    // 如果发送的数据是中文, 要在响应头中加入 Count-Type 指定 charset 为具体编码
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
    })

    res.end('中文count: ' + (++count))
})


// 3. 绑定端口号 启动服务

server.listen(3000, function() {
    console.log('服务已经启动, 请访问')
})