import React, { Component } from 'react'
import update from 'react/lib/update'
import Item from '../_PreviewItem'
import { DropTarget } from 'react-dnd'
import { findDOMNode } from 'react-dom'
import {container} from './index.css'

const Target = {
  drop (props, monitor, component) {
    let itemInfo = monitor.getItem()

    let {name, type} = itemInfo

    if (monitor.didDrop()) {} else {
    // inline类型的组件使用绝对定位
      if (type === 'Inline') {
        const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()
        const delta = monitor.getDifferenceFromInitialOffset()

        let top = itemInfo.top + delta.y - hoverBoundingRect.top
        let left = itemInfo.left + delta.x - hoverBoundingRect.left
        props.putItem({
          key: name,
          attr: {
            left,
            top
          }
        })
      } else {
        props.putItem({
          key: name,
          items: []
        })
      }
    }
  }
}

class _Preview extends Component {

  render () {
    let {connectDropTarget, items, sortElement, moveElement, style, children} = this.props
    return connectDropTarget(
      <div className={container} style={style}>
        {items.map(({key, attr, items}, index) => (<Item {...getItem(key)} index={index} sortElement={sortElement} moveElement={moveElement} attr={attr} items={items} />))}
        {children}
      </div>
    )
  }
}
let Ele = DropTarget(['left-slidebar'], Target, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
  draggingColor: monitor.getItemType()
}))(_Preview)

export default class P extends Component {
  constructor (props) {
    super()
    this.sortElement = this.sortElement.bind(this)
    this.moveElement = this.moveElement.bind(this)
    this.putItem = this.putItem.bind(this)
    this.state = {}
    this.state.items = props.items
  }
  /**
   * preview中的节点排序
   */
  sortElement (dragIndex, hoverIndex) {
    let items = this.state.items

    let drag = items[dragIndex]
    let hover = items[hoverIndex]

    items[dragIndex] = hover
    items[hoverIndex] = drag

    this.setState({
      items
    })
  }
  /**
   * 移动一个节点
   */
  moveElement (dragIndex, attr) {
    let items = this.state.items
    items[dragIndex] = Object.assign(items[dragIndex], {attr})
    this.setState({
      items
    })
  }
  /**
   * 添加一个节点到preview
   */
  putItem (item) {
    this.state.items.push(item)
    this.setState({
      items: this.state.items
    })
  }
  render () {
    let {items} = this.state
    return (
      <Ele putItem={this.putItem} items={items} sortElement={this.sortElement} moveElement={this.moveElement} {...this.props}/>
    )
  }
}

function getItem (key) {
  let mapping = window.MAPPING
  for (let index in mapping) {
    let item = mapping[index]
    if (item.name === key) {
      return item
    }
  }
}
