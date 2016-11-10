import React, { Component } from 'react'
import {Modal, FormControl, Button} from 'react-bootstrap'

export default class _Upload extends Component {

  constructor () {
    super()
    this.state = {
      show: false,
      data: ''
    }
  }

  componentWillUpdate (props) {
    this.state.show = props.show
    this.state.data = ''
  }

  loadFile (file) {
    let reader = new FileReader()
    reader.addEventListener('load', () => {
      this.setState({
        data: reader.result
      })
    })
    reader.readAsDataURL(file)
  }

  onChange ({target}) {
    this.loadFile(target.files[0])
  }

  onDrop (e) {
    e.preventDefault()
    var fileList = e.dataTransfer.files // 获取文件对象
    // 检测是否是拖拽文件到页面的操作
    if (fileList.length === 0) {
      return false
    }
    // 检测文件是不是图片
    if (fileList[0].type.indexOf('image') === -1) {
      alert('您拖的不是图片！')
      return false
    }

    this.loadFile(fileList[0])
  }

  onSave () {
    this.props.onChange(this.state.data)
    this.setState({
      show: false
    })
  }

  render () {
    let onChange = this.onChange.bind(this)
    let onDrop = this.onDrop.bind(this)
    let onSave = this.onSave.bind(this)
    let close = () => this.setState({ show: false })

    return (
      <Modal
          show={this.state.show}
          onHide={close}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">上传图片（可拖拽）</Modal.Title>
          </Modal.Header>
          <Modal.Body onDrop={onDrop}>
            <FormControl type="file" onChange={onChange}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
            <Button bsStyle={'success'} onClick={onSave}>Save</Button>
          </Modal.Footer>
        </Modal>
    )
  }
}
