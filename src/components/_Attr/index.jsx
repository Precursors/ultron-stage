import React, { Component } from 'react'
import {Col, Tabs, Tab, Button, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap'

export default class _Preview extends Component {
  constructor (props) {
    super(props)
    this.state = {
      editing: false,
      tabs: props.tabs || {}
    }
  }

  saveData () {
    this.props.complete(this.state.tabs)
  }

  componentWillUpdate (props) {
    this.state.tabs = props.tabs
    this.state.cursor = Object.keys(props.tabs).filter(key => props.tabs[key])[0]
  }

  /**
   * 自己实现了切换tab的方法，主要为了保存当前选中的tab页
   * 以及在重新生成时改变该cursor的值
   */
  changeTab (key) {
    this.setState({
      cursor: key
    })
  }

  render () {
    let saveData = this.saveData.bind(this)
    let {state, changeTab} = this
    let {tabs, editing, cursor} = state
    let keys = Object.keys(tabs).filter(key => tabs[key])

    return (
      <Tabs defaultActiveKey={keys[0]} unmountOnExit={true} animation={true} activeKey={cursor || keys[0]} onSelect={changeTab.bind(this)}>
        {
          keys.map((key, index) => {
            let item = tabs[key]
            return (item ? (
            <Tab eventKey={key} title={key}>
              <Form horizontal style={{'margin-top': '15px'}}>
                {Object.keys(item).map(k => {
                  let info = item[k]
                  let methods = {}
                  methods.onChange = ({target: {value: v}}) => {
                    item[k].value = v
                    this.setState({
                      editing: true
                    })
                    this.props.complete(this.state.tabs)
                  }

                  if (info.type === 'size') {
                    methods.onKeyDown = ({keyCode, target: {value: v}}) => {
                      if (Number(keyCode) === 38) { // up
                        item[k].value = addNumber(v)
                      } else if (Number(keyCode) === 40) {
                        item[k].value = subNumber(v)
                      } else {
                        return
                      }

                      this.setState({
                        editing: true
                      })
                      this.props.complete(this.state.tabs)
                    }
                  }
                  return (
                    <FormGroup>
                      <Col componentClass={ControlLabel} sm={4}>
                        {k}
                      </Col>
                      <Col sm={8}>
                        {getInputType(info, methods)}
                      </Col>
                    </FormGroup>
                  )
                })}
                {editing ? <Button bsStyle="success" onClick={saveData}>Save</Button> : <Button disabled>Save</Button>}
              </Form>
            </Tab>
            ) : null)
          })
        }
      </Tabs>
    )
  }
}

function getInputType (info, methods) {
  switch (info.type) {
    case 'select':
      return (
        <FormControl componentClass="select" placeholder="select" value={info.value} {...methods}>
          {
            [].map.call(info.items, item => <option value={item}>{item}</option>)
          }
        </FormControl>
      )
    default:
      return <FormControl type={info.type} value={info.value} {...methods}/>
  }
}

function addNumber (val) {
  return val.replace(/^\d+/, (val) => Number(val) + 1)
}

function subNumber (val) {
  return val.replace(/^\d+/, (val) => Math.max(0, Number(val) - 1))
}
