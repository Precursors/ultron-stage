import React, { Component } from 'react'
import {container, header, listitem} from './index.css'

export default class _ItemMenu extends Component {

  render () {
    let {mapping, addItem} = this.props
    return (<div className={container}>
      {
        mapping.map(({title, items}, key) => {
          return (
            <div>
              <h2 className={header}>{title}</h2>
              <ul>
                {
                  items.map(item => {
                    return (<li className={listitem} onClick={() => { addItem(item.name) }}>{item.name}</li>)
                  })
                }
              </ul>
            </div>
          )
        })
      }
    </div>)
  }
}
