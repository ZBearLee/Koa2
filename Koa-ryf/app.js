/* //没有koa,原生实现koa

const http = require('http')

const hostname = '127.0.0.1'

const port = 8080

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello Koa')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
}) */


// 模块化方案 imoprt  CommonJs  RequireJs
const Koa = require('koa')
//const fs=require('fs')
const fs = require('fs-promised')
//还是不可以运转，需要安装中间件
//中间件安装成功后还是不可以解决


const app = new Koa

const port = 8080

const main = async ctx => {
    /*      //用了await之前需要用到async,没有async就不可以用await,
        //async/await是koa2中间件函数  异步解决方案
         ctx.response.type = 'html'
        // ctx.response.body=fs.createReadStream('./index.html')
        //ctx.response.body=fs.readFile('./index.html','utf8')
        //错误IDeprecationWarning: Calling an asynchronous function without callback is deprecated
        //readFile是异步函数，Promise，读取文件要时间，通过callback来实现
        ctx.response.body = await fs.readFile('./index.html', 'utf8')
        //SyntaxError: Unexpected identifier此时又出现了错误，因为fs是同步的,需要fs-promise异步化 */




    const n = Number(ctx.cookies.get('view') || 0) +1//将值绝对的转换为整数
    //上下文坏境  cookies   http 客户端会传过来
    // http  header   服务器端也可以种下cookies
    //session  cookie都是识别用户的  比如购物车  json对象  json.stringify()
    //cookie有大小限制  简单的字符
    //session更大，更安全  redis 数据库内  更复杂
    //cookies每次都http请求中携带   一旦太大，请求性能就会受影响
    ctx.cookies.set('view',n)   
    //此时到浏览器中的application中我们可以看到cookies下的value会增加，所以cookies已经在浏览器中种下了
    //cookies在前端后后端都是一样的，session只存在于后端
    //所以在服务器端有一个session,用来转换cookie,同样可以识别你是你
    ctx.body = `当前浏览器${n}`
}

app.use(main)

app.listen(port)

