'use strict'

let views = require('../libs/views.js')

module.exports = function (router) {
  router.get('/', function* () {
    this.body = yield views('index')
  })
}
