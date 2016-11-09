import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { DropTarget, DragSource } from 'react-dnd'
import {block, inline} from './index.css'
import Preview from '../_Preview'

const Source = {
  beginDrag (props) {
    return {
      type: props.type,
      index: props.index
    }
  },
  endDrag (props, monitor, component) {
    let {type} = props
    // 对绝对定位的元素特殊处理
    if (type === 'Inline' && monitor.getDifferenceFromInitialOffset()) {
      let {index} = monitor.getItem()
      let {x, y} = monitor.getDifferenceFromInitialOffset()
      let {attr} = props
      let left = x + attr.left
      let top = y + attr.top

      props.moveElement(index, {left, top})
    }
  }
}

const Target = {
  hover (props, monitor, component) {
    let {type} = props
    // 块级元素会排序，Inline元素不进行排序
    if (type === 'Block' || type === 'Layout') {
      const dragIndex = monitor.getItem().index
      const hoverIndex = props.index

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }

      // Determine rectangle on screen
      const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()

      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      // Determine mouse position
      const clientOffset = monitor.getClientOffset()

      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      // Time to actually perform the action
      props.sortElement(dragIndex, hoverIndex)

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      monitor.getItem().index = hoverIndex
    }
  }
}

class _PreviewItem extends Component {
  render () {
    let {connectDragSource, connectDropTarget, components, type, items} = this.props
    let porps = Object.assign({}, this.props, this.props.default)
    switch (type) {
      case 'Layout':
      case 'Block':
        return connectDragSource(connectDropTarget(
          <div className={block}>
            {React.createElement(components.default, porps)}
            <Preview porps={porps} style={{'min-height': '100px', 'height': 'auto', 'width': '80%'}} items={items} />
          </div>
        ))
      case 'Inline':
        let {top, left} = this.props.attr
        let styles = {
          position: 'absolute',
          top,
          left
        }
        return connectDragSource(connectDropTarget(
          <div className={inline} style={styles}>
            {React.createElement(components.default, porps)}
          </div>
        ))
      default:
        return connectDragSource(
          <div className={block}>
            {React.createElement(components.default, porps)}
          </div>
        )
    }
  }
}
export default DropTarget('preview', Target, connect => ({
  connectDropTarget: connect.dropTarget()
}))(DragSource('preview', Source, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(_PreviewItem))
