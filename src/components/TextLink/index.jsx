import React, {Component} from 'react'

class TextLink extends Component {
  render () {
    const {href, text, title} = this.props
    return (
      <a href={href} title={title}>{text}</a>
    )
  }
}

export default TextLink
