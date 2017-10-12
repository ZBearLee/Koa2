//const Koa = require('koa')
const Koa = require('./koa')
const app = new Koa()

const main = ctx => {
   // ctx.body = 'hello world'
   console.log(fn)
   this.middleware.push(fn)
   //chain 链式调用
}

app.use(main)
app.listen(3000)