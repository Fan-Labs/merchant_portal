import React, { Component } from 'react'
import { Modal } from 'antd'
import IntlMessages from '../../components/utility/intlMessages'
import Button from '../../components/uielements/button'
import HowToWrapper from './HowTo.style.js'

export default class extends Component {

  constructor(props){
    super(props)
    this.state = {
      showModal: false,
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal(event) {
    event.preventDefault()
    this.setState({showModal: !this.state.showModal})
  }


  render() {
    const { showModal } = this.state
    return (
      <React.Fragment>
        <Button type="normal" onClick={this.toggleModal}><IntlMessages id="c20Verify.howToButton" /></Button>
        <Modal
            visible={showModal}
            onOk={this.toggleModal}
            onCancel={this.toggleModal}
            footer={null}
          >
            <HowToWrapper>
              <div className="stepTitle"><IntlMessages id="c20Verify.step" /> 1</div>
              <div className="step"><IntlMessages
              id="c20Verify.step1"
              values={{
                link: <a href="https://www.myetherwallet.com/signmsg.html" target="_blank" rel="noopener noreferrer">https://www.myetherwallet.com/signmsg.html</a>
              }}
              /></div>
              <div className="image" />
              <div className="stepTitle"><IntlMessages id="c20Verify.step" /> 2</div>
              <div className="step"><IntlMessages id="c20Verify.step2" /></div>
              <div className="stepTitle"><IntlMessages id="c20Verify.step" /> 3</div>
              <div className="step"><IntlMessages id="c20Verify.step3" /></div>
            </HowToWrapper>
          </Modal>
      </React.Fragment>

    );
  }
}