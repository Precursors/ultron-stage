import React, {Component} from 'react'

class Image extends Component {
  render () {
    const {src, styles} = this.props
    return (
      <img src={src} style={styles}/>
    )
  }
}

export default Image
