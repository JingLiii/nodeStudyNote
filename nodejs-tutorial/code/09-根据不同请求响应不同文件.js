var http = require('http')
var fs = require('fs')

var server = http.createServer()

server.on('request', function (req, res) {
    var url = req.url
    if (url === '/') {
        fs.readFile('./view/index.html', function (err, data) {
            if (err) {
                // 抛出异常, 直接在终端显示错误信息, 同时程序终止
                // 开发阶段, 先这么用, 能快速定位错误源
                throw err
            }
            // res.end 可以接受两种类型的参数, 一种是字符串(字符串最终也要转化成二进制), 一种是二进制数据
            // 如果需要对 data 中的字符串进行进一步处理, (例如在字符串行首拼接一个 start, 则这个时候, 必须自己转为字符串, 再进行处理)
            // 如果不处理 data, 则可以直接通过 res.end发送一个二进制数据
            res.end(data)
        })

    } else if (url === '/login') {
        fs.readFile('./view/login.html', function (err, data) {
            if (err) {
                throw err
            }
            res.end(data)
        })
    } else if (url === '/asstes/css/main.css') {
        fs.readFile('./asstes/css/main.css', function (err, data) {
            if (err) {
                throw err
            }
            res.end(data)
        })
    } else if (url === '/asstes/img/my.jpg') {
        fs.readFile('./asstes/img/my.jpg', function (err, data) {
            if (err) {
                throw err
            }
            res.end(data)
        })
    } else {
        fs.readFile('./view/404.html', function (err, data) {
            if (err) {
                throw err
            }
            res.end(data)
        })
    }
})

server.listen(3000, function () {
    console.log('running...')
})