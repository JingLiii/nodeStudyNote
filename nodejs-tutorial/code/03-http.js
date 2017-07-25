// 引入核心模块
var http = require('http')

// 1. 创建服务器
var server = http.createServer()

// 2. 设置请求函数
//      request 请求事件 是所有请求的入口
//      也就是说任何请求进来都会触发该事件, 然后执行回调处理函数

//  第二参数, 回调函数, 
//      request: 请求对象, 用来接收获取客户端请求的一些数据信息, 例如当前请求的路径
//      response: 相应对象, 用来给本次请求发送相应数据
server.on('request', function(req, res) {
    console.log('收到客户端的请求了...')
    res.write('<h1>hello')
    res.write('world</h1>')
        // 发送响应数据, 一定要记得结束响应
        // 否则浏览器认为你的数据还没有发完, 所以一直等待响应结束
    res.end()
})

// 3. 监听端口号, 启动服务
//      IP 地址: 定位一台通信计算机
//      端口号: 定位具体的应用程序
server.listen(3000, function() {
    console.log('服务启动成功..')
})