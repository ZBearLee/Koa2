const Koa=require('koa')
const app=new Koa()
// Server 端口node.js  client客户端  dom ajax  js  
//向引入的模块传参   ,引入的时候就调用了
require('./config')(app)
//相当于  var config=require('config')
//config(app)
//路由
require('./routes')(app)

app.listen(3000)