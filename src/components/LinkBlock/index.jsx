import React, {Component} from 'react'
import style from './index.css'
import Container from '../Container'

class LinkBlock extends Component {
  render () {
    const {href, children} = this.props
    return (
      <Container>
        <a className={style['link-wrap']} href={href}>{children}</a>
      </Container>
    )
  }
}

export default LinkBlock
