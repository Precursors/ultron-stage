import React, {Component} from 'react'
import {container} from './index.css'

class Text extends Component {
  render () {
    const {text} = this.props
    return (
      <span className={container}>{text}</span>
    )
  }
}

export default Text
