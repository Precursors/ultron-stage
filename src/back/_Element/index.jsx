import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { DragSource } from 'react-dnd'

const Source = {
  beginDrag ({name, type}, monitor, component) {
    let {width, height, top, left} = findDOMNode(component).getBoundingClientRect()
    return {
      type,
      name,
      width,
      height,
      top,
      left
    }
  }
}

class _Element extends Component {
  render () {
    let {name, connectDragSource} = this.props
    return connectDragSource(
      <p>{name}</p>
    )
  }
}
export default DragSource('left-slidebar', Source, (connect) => ({
  connectDragSource: connect.dragSource()
}))(_Element)
