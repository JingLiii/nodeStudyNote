var template = require('art-template')
var fs = require('fs')
// 模板引擎只关注自己认识的{{}} 所谓的模板语法, 不关心你的格式内容
// var render = template.compile('hellow {{text}}, 你好 {{user.name}}')
// var render = template.compile('hellow {{text}}, 你好 {{user.name}}')

fs.readFile('./data/template', function (err, data) {
  if (err) {
    throw err
  }
  var render = template.compile(data.toString())
  var res = render({
    title: 'nihao',
    user: {
      name: 'zhangsan'
    },
    arr: ['aaa', 'bbb', 'ccc']
  })
  console.log(res)
})
// var render = template.compile('<h1>hello {{title}}</h1> <ul>{{each arr}}<li>{{$value }}</li>{{/each}}</ul> </ul>')


