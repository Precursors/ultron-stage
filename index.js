'use strict'

let koa = require('koa')
let app = koa()

let bodyParser = require('koa-body-parser')
let serve = require('koa-static')
let router = require('./libs/loadRouters.js')
let conf = require('./config/server.js')
let dirname = require('path').dirname
let base = dirname(process.mainModule.filename)

app.use(router())
app.use(bodyParser())
app.use(serve(base + '/public'))
app.listen(conf.port)

process.on('uncaughtException', function (err) {
  console.log(err)
})
