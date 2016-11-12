import React from 'react'
import {render} from 'react-dom'
import Mapping from '../components'
import _Configuration from '../components/_Configuration'

window.MAPPING = Mapping
window.cleanObject = (obj) => {
  if (!obj) return
  obj = deepCopy({}, obj)
  let result = {}
  Object.keys(obj).forEach(key => {
    switch (obj[key].type) {
      case 'logogram':
        let items = obj[key].items
        // 删掉复合属性
        delete obj[key]
        // 对每个属性分别设置
        Object.entries(items).forEach(([k, v]) => {
          obj[`${key}-${k}`] = v
        })
        // 就是说类似于 padding 会生成
        // padding-left,padding-right...
        break
      default: result[key] = obj[key].value
    }
  })

  return result
}

let deepCopy = window.deepCopy = (target, source) => {
  for (let key in source) {
    if (typeof source[key] === 'object' && !Array.isArray(source[key])) {
      target[key] = deepCopy({}, source[key])
    } else {
      target[key] = source[key]
    }
  }

  return target
}

let mapping = groupMapping(Array.from(Mapping))
// 删除私有的组件
delete mapping.private

let treeList = ['Layout', 'Block', 'Inline'].map(key => {
  let result = {
    title: key,
    items: mapping[key]
  }
  return result
})

render(<_Configuration mapping={treeList}/>, document.getElementById('root'))

function groupMapping (mapping) {
  let result = {}
  mapping.forEach(item => {
    let type = item.type
    let child = result[type] = result[type] || []
    child.push(item)
  })

  return result
}

/**
 * 为了实现拖拽上传的，需要将这几个事件禁用掉
 */
function initDrapEvent () {
  document.body.addEventListener('dragleave', (e) => {
    e.preventDefault()
  })
  document.body.addEventListener('drop', (e) => {
    e.preventDefault()
  })
  document.body.addEventListener('dragenter', (e) => {
    e.preventDefault()
  })
  document.body.addEventListener('dragover', (e) => {
    e.preventDefault()
  })
}

initDrapEvent()
