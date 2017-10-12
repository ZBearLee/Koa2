const Koa = require('koa')    //引入koa,是新一代的node.js网站开发框架
const route = require('koa-route')    //路由中间件
const app = new Koa()   //一个web server就好像一个app
const fs = require('fs')

//启动服务器
//htt协议，用户访问，执行，返回结果(页面)
//中间件   从请求中间件    返回
//网站的概念一切皆资源
const main = ctx => {
    ctx.response.type = 'html'
    //template文件可以被读
    //ctx.response.body = 'Hello Koa'
    ctx.response.body = fs.createReadStream('./index.html')
}
//关于我们
const about = ctx => {
    ctx.response.type = 'html'
    //ctx.response.body = '<a href="/">Index Page</a>'
    ctx.response.body = fs.createReadStream('./about.html')
}
//app.use(main)
app.use(route.get('/', main))
app.use(route.get('/about', about))

app.listen(3000)
