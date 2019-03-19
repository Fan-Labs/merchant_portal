import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import queryString from 'query-string'
import appActions from '../../redux/app/actions'
import businessActions from '../../redux/businesses/actions'

const { fetchBusiness } = businessActions

function mapStateToProps(state, ownprops) {
  return {
    business: state.Businesses.get('businesses').find((business) => business.id === parseInt(ownprops.match.params.id)),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchBusiness
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {

    constructor(props) {
      super(props)
    }

    componentDidMount() {
      const { business, fetchBusiness } = this.props;
      if(!business) {
        fetchBusiness(this.props.match.params.id)
      }
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
