import React, {Component} from 'react'
import {container} from './index.css'

class Text extends Component {
  render () {
    const {text, styles} = this.props
    return (
      <span className={container} style={styles}>{text}</span>
    )
  }
}

export default Text
