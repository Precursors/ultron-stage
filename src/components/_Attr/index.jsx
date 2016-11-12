import React, {Component} from 'react'
import { Col, Tabs, Tab, Button, Form, FormGroup, FormControl, InputGroup, ControlLabel } from 'react-bootstrap'
import _Upload from '../_Upload'

export default class _Preview extends Component {
  constructor (props) {
    super(props)
    this.state = {
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
    this.setState({cursor: key})
  }

  render () {
    let {state, changeTab, saveData} = this
    let {tabs, cursor} = state
    let keys = Object.keys(tabs).filter(key => tabs[key])
    saveData = saveData.bind(this)
    changeTab = changeTab.bind(this)

    return (
      <div>
        <Tabs defaultActiveKey={keys[0]} unmountOnExit={true} animation={true} activeKey={cursor} onSelect={changeTab}>
          {keys.map((key, index) => {
            let item = tabs[key]
            return (item
              ? (<Tab eventKey={key} title={key}>
                  <Form horizontal style={{'margin-top': '15px'}}>
                    {Object.keys(item).map(k => {
                      let info = item[k]
                      let type = info.type
                      let methods = {}
                      methods.onChange = ({ target: { value: v } }) => {
                        info.value = v
                        saveData()
                      }

                      // 对特殊表单的一些处理
                      // 比如size添加上下箭头的事件监听
                      // file添加弹出层的数据捕获
                      if (type === 'size') {
                        methods.onKeyDown = ({keyCode, target: {value: v}}) => {
                          if (Number(keyCode) === 38) { // up
                            item[k].value = addNumber(v)
                          } else if (Number(keyCode) === 40) {
                            item[k].value = subNumber(v)
                          } else {
                            return
                          }
                          saveData()
                        }
                      } else if (type === 'file') {
                        methods.openFilePanel = () => {
                          this.setState({
                            show: true,
                            onFileChange: (value) => {
                              info.value = value
                              this.setState({
                                show: false,
                                onFileChange: ''
                              })
                              saveData()
                            }
                          })
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
                  </Form>
                </Tab>
              ) : null)
          })
        }
        </Tabs>
        <_Upload show={this.state.show} onChange={this.state.onFileChange} />
      </div>
    )
  }
}

function getInputType (info, methods) {
  switch (info.type) {
    case 'select':
      return (
        <FormControl componentClass="select" placeholder="select" value={info.value} {...methods}>
          {[].map.call(info.items, item => <option value={item}>{item}</option>)}
        </FormControl>
      )
    case 'file':
      return (
        <InputGroup>
          <InputGroup.Button>
            <Button onClick={methods.openFilePanel}>上传图片</Button>
          </InputGroup.Button>
          <FormControl type="text" disabled value={info.value} />
        </InputGroup>
      )
    case 'logogram':
      return (<FormControl type={info.itemType} value={info.value} {...methods}/>
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
