// Node.js模块化机制  CommonJs
const bodyParser = require('koa-bodyparser')
//session 会话 管理 
const session = require('koa-session-minimal')  //最小号session
module.exports = app => {
    //声明中间件
    app.use(bodyParser())
    app.use(session({
        //服务器端session
        key:'session-id',
        //客户端
        cookie:{
        domain:'localhost',   //当前目录下
        path:'/',   //根目录下
        maxAge:1000*60*30,    //半小时内有效
        httpOnly:true,
        overwrite:false    //禁止被溢出
        }
    }))
    
}