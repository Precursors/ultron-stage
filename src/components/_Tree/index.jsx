import React, { Component } from 'react'
import _TreeNode from '../_TreeNode'
import {buttonWrap, container} from './index.css'
import {DropdownButton, MenuItem} from 'react-bootstrap'

export default class _Tree extends Component {

  constructor (props) {
    super(props)

    // 默认为close状态
    // 隐藏选择组件的区域
    this.state = {
      onOpen: false
    }

    this.onSelect = this.onSelect.bind(this)
  }

  /**
   * 获取到选择的组件，将其添加至列表中
   */
  onSelect (key) {
    let items = Array.from(this.props.items)
    items.push({
      key,
      config: getItem(key),
      items: []
    })

    this.setState({onOpen: false})

    this.setChange(items)
  }

  /**
   * 移除选择的组件
   */
  removeItem (index) {
    let items = Array.from(this.props.items)
    items.splice(index, 1)
    this.setChange(items)
  }

  /**
   * 上移
   */
  changeUp (index) {
    // 如果当前下标为第一个，点击无效
    if (index === 0) return

    let items = Array.from(this.props.items)
    let before = index - 1

    items.splice(before, 2, ...items.slice(before, index + 1).reverse())
    this.setChange(items)
  }

  /**
   * 下移
   */
  changeDown (index) {
    let items = Array.from(this.props.items)

    // 如果当前下标为最后一个，点击无效
    if (index === items.length) return

    let after = index + 2
    items.splice(index, 2, ...items.slice(index, after).reverse())

    this.setChange(items)
  }

  /**
   * 传入子组件的方法，默认已经bind了index
   * 拿到data以后更新对应的数据，并传递变化
   */
  changeData (index, data) {
    let items = Array.from(this.props.items)
    let cursor = items[index]

    cursor.items = data

    this.setChange(items)
  }

  editorItem (cursor, indexList) {
    this.props.editorItem(indexList !== undefined ? [cursor].concat(indexList) : [cursor])
  }

  /**
   * 将当前的组件结构传递至顶层
   * 由顶层来触发更新
   */
  setChange (items) {
    this.props.changeData(items)
  }

  componentWillUpdate (props) {
    // 这种情况说明上一次新增加的节点是在这下边的，手动调用editorItem的方法
    if (props.items.length > this.props.items.length) {
      this.editorItem(this.props.items.length)
    }

    if (props.items.length < this.props.items.length) {
      this.editorItem()
    }
  }

  render () {
    let {props, removeItem, changeUp, changeDown, changeData, editorItem, onSelect} = this
    let {mapping, items} = props
    let maxLen = mapping.length - 1
    let itemLength = items.length

    return (
      <div>
        <ul className={container}>
        {items.map((item, index) => {
          let childMethods = {
            removeItem: removeItem.bind(this, index),
            changeUp: changeUp.bind(this, index),
            changeDown: changeDown.bind(this, index),
            changeData: changeData.bind(this, index),
            editorItem: editorItem.bind(this, index)
          }
          return (
            <li>
              <_TreeNode item={item} items={item.items} index={index} itemLength={itemLength} mapping={mapping} {...childMethods}/>
            </li>
          )
        })}
        </ul>
        <DropdownButton bsStyle="link" title="Add" noCaret onSelect={onSelect} bsSize="xsmall" className={[buttonWrap].concat('fa fa-plus').join(' ')}>
          {
            mapping.map((item, index, map) => (
              [
                (<MenuItem header>{item.title}</MenuItem>)
              ].concat(item.items.map(component => (
                <MenuItem eventKey={component.name}>{component.name}</MenuItem>
              )), index !== maxLen ? (<MenuItem divider></MenuItem>) : null)
            ))
          }
        </DropdownButton>
      </div>
    )
  }
}

function getItem (key) {
  let mapping = Object.assign({}, window.MAPPING)
  for (let index in mapping) {
    let item = mapping[index]
    if (item.name === key) {
      return window.deepCopy({}, item)
    }
  }
}
