import React, { Component } from 'react'
import _Tree from '../_Tree'
import {element, title, tools, container, toolWrap} from './index.css'

export default class _TreeNode extends Component {

  constructor (props) {
    super(props)

    this.changeData = this.changeData.bind(this)
  }

  changeData (items) {
    this.props.changeData(items)
  }

  render () {
    let {props, changeData} = this
    let {item, index, itemLength, mapping, removeItem, changeUp, changeDown, editorItem} = props
    let {items} = props

    let disableStyle = {
      color: '#ccc',
      cursor: 'not-allowed'
    }
    return (
      <div className={element}>
        <div className={title}>
          <span>{item.key}</span>
          <div className={toolWrap}>
            <i className={[tools].concat('fa fa-arrow-up').join(' ')} onClick={changeUp} style={index === 0 ? disableStyle : null }></i>
            <i className={[tools].concat('fa fa-arrow-down').join(' ')} onClick={changeDown} style={index === itemLength - 1 ? disableStyle : null }></i>
            <i className={[tools].concat('fa fa-edit').join(' ')} onClick={() => editorItem()}></i>
            <i className={[tools].concat('fa fa-trash').join(' ')} onClick={removeItem}></i>
          </div>
        </div>
        <div className={container}>
          <_Tree mapping={mapping} changeData={changeData} items={items} editorItem={editorItem}/>
        </div>
      </div>
    )
  }
}
