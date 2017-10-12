//标签  debug   出处
var debug = require('debug')('http')

http = require('http')
name = 'My App'

debug('booting %o', name)   //%o指向一个对象

http.createServer((req, res) => {
    debug(req.method + '' + req.url)
    res.end('hello\n')
}).listen(8080, function () {
    debug('listening')
})

require('./worker')