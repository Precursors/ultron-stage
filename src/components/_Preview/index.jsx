import React, { Component } from 'react'

export default class _Preview extends Component {

  render () {
    let {items} = this.props
    return (<div>
      {
        items.map(buildElement)
      }
    </div>)
  }
}

function buildElement ({config, items}) {
  let children = items.map(buildElement)

  return (
    React.createElement(config.components.default, Object.assign({}, config, window.cleanObject(config.attrs), {
      styles: window.cleanObject(config.styles)
    }, {__env: 'preview'}), children)
  )
}
