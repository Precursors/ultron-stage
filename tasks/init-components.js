'use strict'

const path = require('path')
const fs = require('fs')
const root = './src/components'

let componentsMap = []
let components = fs.readdirSync(root)

components.filter(fileName => fs.statSync(path.resolve(root, fileName)).isDirectory()).forEach(packName => {
  let pack = require(path.resolve(root, packName, 'package'))

  componentsMap.push(Object.assign(pack, {
    name: pack.name || packName
  }))
})

let indexList =
  `/**
 * Automatically generated files
 * Please do not modify
 * @author Jarvis
 */

/*eslint-disable */

let Mapping = []
${componentsMap.map((info) => `Mapping.push(Object.assign({components: require('../components/${info.name}')}, ${JSON.stringify(info)}))`).join('\n')}
module.exports = Mapping
`.replace(/^\s$/, '').replace(/"/g, '\'')
fs.writeFileSync(path.resolve(root, 'index.js'), indexList)
