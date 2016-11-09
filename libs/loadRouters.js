'use strict'

let path = require('path')
let compose = require('koa-compose')
let fs = require('fs')
let Router = require('koa-router')
let routers = []

function files () {
  let name = 'router'
  let dirname = path.dirname(process.mainModule.filename)
  let appPath = path.join(dirname, name)
  if (fs.existsSync(appPath)) {
    let dirs = fs.readdirSync(appPath)
    let apps = {}
    dirs.map(function (value) {
      value = value.replace(/(\.js|\.json)$/, '')
      let router
      if (value === 'index') {
        router = new Router({
          prefix: '/'
        })
      } else {
        router = new Router({
          prefix: '/' + value
        })
      }

      if (value.indexOf('.') !== 0) {
        apps[value] = path.join(dirname, name, value)
        let route = require(apps[value])
        if (typeof route === 'function') {
          route(router)
        }
      }
      routers.push(router.routes())
    })

    return compose(routers)
  } else {
    return []
  }
}

module.exports = files
