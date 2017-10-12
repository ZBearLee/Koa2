const fs = require('fs')
const Koa = require('koa')
const loggerAsync =
  require('./middle/logger-async')
const app = new Koa()
app.use(loggerAsync())
async function route(url) {
  let view = '404.html'
  switch (url) {
    case '/':
      view = 'index.html'
      break;
    case '/index':
      view = 'index.html'
      break;
    case '/todo':
      view = 'todo.html'
      break;
    default:
      break;
  }
  let html = await render(view)
  return html
}


function render(page) {
  return new Promise((resolve, reject) => {
    let viewUrl = `./views/${page}`
    // console.log(viewUrl)
    fs.readFile(viewUrl, 'binary', (err, data) => {
        if(err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
  })
}


app.use(async(ctx) => {
  let url = ctx.request.url
  let html = await route(url)
  // console.log('router')
  ctx.body = html
})
app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')
