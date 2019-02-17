import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { MESSAGE_KEYS } from '../../constants'

function mapStateToProps(state, ownprops) {
  return {
    isLoading: state.App.get('isLoading'),
    placeSuggestion: state.Businesses.get('placesAPIResult')
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
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
      
     
    }


    handleSubmit(values) {
      console.log(values)
    }


    render() {
      return (
        <ComposedComponent
          {...this.props}
          {...this.state}
          handleSubmit={this.handleSubmit}
        />
      );
    }
  }


  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
