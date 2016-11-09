'use strict'

let views = require('co-views')
let dirname = require('path').dirname
let base = dirname(process.mainModule.filename)

let render = views(base + '/views', {
  default: 'html',
  map: {
    html: 'handlebars'
  }
})
module.exports = render
