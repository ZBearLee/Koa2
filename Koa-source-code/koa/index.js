//  module.exports  CommonJs规范
//Emitter? 是JS事件机制  events事件队列 Emitter是node.js中事件的订阅和发布的一个对象
//事件触发与事件监听功能的封装
const Emitter = require('events')
const http = require('http')
const debug = require('debug')
module.exports = class Application extends Emitter {  //输出一个类
    constructor() {
        super()
        this.middleware = []
    }


    //启用中间件
    use(fn) {

    }

    //reset
    listen(...args) {
        //将http的server封装一下
        debug('listen')
        const server = http.createServer(this.callback())
        return server.listen(...args)
    }
    callback() {
        const handleRequest = (req, res) => {
            fn(ctx).then
            res.end('hello world')
        }
        return handleRequest
    }
}       