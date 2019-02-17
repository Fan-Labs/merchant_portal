import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import appActions from '../../redux/app/actions'
import businessActions from '../../redux/businesses/actions'

const { fetchUserBusinesses } = businessActions

function mapStateToProps(state, ownprops) {
  return {
    businesses: state.Businesses.get('businesses'),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchUserBusinesses
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {

    constructor(props) {
      super(props)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(values) {
      console.log(values)
    }

    componentDidMount() {
     this.props.fetchUserBusinesses() 
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
        />
      );
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
