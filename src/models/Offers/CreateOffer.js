import React, {Component} from 'react'
import { formValueSelector } from 'redux-form'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const selector = formValueSelector('createOffer')

function mapStateToProps(state, ownprops) {
  const offer_type = selector(state, 'offer_type')
  return {
    offer_type: offer_type
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {
    constructor(props) {
      super(props)
      this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(values) {
      console.log(values)
      debugger
    }


    render() {
      console.log(this.props.offer_type)
      return (
        <ComposedComponent
          {...this.props}
          onSubmit={this.onSubmit}
        />
      );
    }
  }


  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
