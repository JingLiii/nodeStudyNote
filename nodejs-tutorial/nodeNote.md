## 总结
* Node 是什么
* 如何使用 Node 解析执行 JS 文件
* path 环境变量
    * 把可执行文件所属目录的绝对路径添加到 path 环境变量中

## Node 中的 JavaScript

### Ecmascript
* var 
* if esle
* {}
* Object
* Number
* String
* Date
* Math
* ...
* console
* 定时器
    * setTimeout clearTimeout
    * setInterval clearInterval
* global
### 核心模块
> Node 把绝大多数中的API都分装到了一个具名的核心模块中,例如文件操作的'fs', 网路操作中的'http'
> 也就是说你想要使用核心模块, 必须先加载才可以使用
* 核心模块是由Node环境平台本身提供
* 以一个唯一的核心模块标识名称进行暴露
* 使用的时候, 直接通过`require`函数进行加载
```
var 起个名字 = require('唯一的核心模块标识名称')
```

### 第三方模块
* 由社区提供, 也就是所谓的第三方
    * 公司
    * 个人
* 举个例子: moment 时间处理库

* 如何在node 中使用第三方包
    * 通过 npm下载
    * 通过 require 函数引包
    * 查看第三方的 API 文档

### 用户自定义模块

* 在 Node 中, 也提供了一种所谓的 JavaScript 模块化解决方案 类似于Require.js

## 文件操作

### 文件读取
```js
// 引包
var fs = require('fs')


// 读取文件
// 第一个参数: 读取文件的路径
// 第二个参数: 回调函数
//      err: 
//          如果操作失败:则err是一个错误对象, data是undefiend
//          如果读取成功: err是一个null, data是读取到的文件数据
//      data:
fs.readFile('../1.md', function(err, data) {
    // console.log(data)
    if (err) {
        // console.log('读取文件失败')
        console.log(err)
    } else {
        console.log('读取文件的回调函数执行了')
        console.log(data.toString())
    }
})
```

### 文件写入
```js
var fs = require('fs')


// 写文件
// 第一个参数: 文件路径
//      '如果没有会自动新建', 如果存在, 会自动覆盖
// 第二个参数: 写入数据
// 第三个参数: 回调函数, 
//      err: 成功为空, 失败为错误对象
fs.writeFile('./data/a.txt', '你好, Node.js', function(err) {
    if (err) {
        return console.log('写入文件失败')
    }
    console.log('写入文件成功')
})
```

## 构建 HTTP 服务

### 响应 hello world 

### 根据不同请求响应不同数据