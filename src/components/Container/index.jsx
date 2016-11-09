import React, {Component} from 'react'
import {container} from './index.css'

export default class Container extends Component {
  render () {
    let {children, __env, styles, attrs} = this.props
    return (
      <div className={[container].concat(__env === 'preview' ? 'element' : '').join(' ')} style={styles} {...attrs}>
        {children}
      </div>
    )
  }
}
