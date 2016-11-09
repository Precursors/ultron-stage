import React, { Component } from 'react'
import _Preview from '../_Preview'
import _Tree from '../_Tree'
import _Attr from '../_Attr'
import {title, tools, container, panel, toolWrap} from './index.css'
import {Panel, Grid, Col} from 'react-bootstrap'

class _Configuration extends Component {
  constructor () {
    super()

    // 根节点的属性配置
    // config里边会有两项被映射到界面中
    //
    // items 是生成时使用的
    // elements 是Preview展示时使用的
    // elements会将attrs和styles里边的属性进行处理
    this.state = {
      key: 'Window',
      config: {
        attrs: {
          title: {
            value: 'New Window'
          }
        }
      },
      items: [],
      editors: {}
    }
  }

  /**
   * 这里会接收到当前结构的数据，如果不执行setState，则整个树的结构都不会发生改变
   * 虽说每一个Tree都实现了addItem之类的方法，用于添加新的节点
   * 其实只是将新的节点拼接到这个节点的自节点中，然后将整个树返回到顶层，由顶层来决定是否重新渲染
   * 优点在于比较好控制，只有顶层来处理数据的更新
   * 缺点在于层级多了以后，中间数据传递函数调用会有很多次（希望全寄托在React的比较算法上了-.-）
   */
  changeData (data) {
    this.setState({
      items: data
    })
  }

  /**
   * 这里获得的是一个下标的集合
   * 如果参数是null 则是Window的一些属性配置
   */
  editorItem (indexList) {
    let self = this
    let item = self.state

    indexList && indexList.filter(i => i !== undefined).forEach((index, level) => {
      if (!item) throw new Error(`wrong index at level[${level}]`)
      item = item.items[index]
    })

    // 将获取到的节点的 attrs和styles俩属性塞到state里边
    // 并且生成一个回调用来保存修改
    this.setState({
      editors: {
        tabs: {
          attrs: item.config.attrs && Object.assign({}, item.config.attrs),
          styles: item.config.styles && Object.assign({}, item.config.styles)
        },
        complete (result) {
          item.config = Object.assign(item.config, result)

          self.changeData(self.state.items)
        }
      }
    })
  }

  componentDidMount () {
    this.editorItem()
  }

  render () {
    let {editorItem, props, state} = this
    let {mapping} = props
    let {key, items, editors} = state

    return (
      <Grid>
        <Col sm={8} xs={12}>
          <Panel header="Preview">
            <_Preview items={items} />
          </Panel>
        </Col>
        <Col sm={4} xs={12}>
          <Panel header="Components" className={panel}>
            <div className={title}>
              <span>{key}</span>
              <div className={toolWrap}>
                <i className={[tools].concat('fa fa-edit').join(' ')} onClick={editorItem.bind(this, null)}></i>
                <i className={[tools].concat('fa fa-trash').join(' ')} style={{color: '#ccc', cursor: 'not-allowed'}}></i>
              </div>
            </div>
            <div className={container}>
              <_Tree mapping={mapping} changeData={this.changeData.bind(this)} items={items} editorItem={this.editorItem.bind(this)}/>
            </div>
          </Panel>
          <Panel header="Configurations">
            <_Attr {...editors}/>
          </Panel>
        </Col>
      </Grid>
    )
  }
}

export default _Configuration
