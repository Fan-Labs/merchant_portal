import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import queryString from 'query-string'
import UIActions from '../../redux/ui/actions'
import businessActions from '../../redux/businesses/actions'
import fixtureActions from '../../redux/fixtures/actions'

const { fetchBusiness } = businessActions
const { setDateDrawer } = UIActions
const { fetchFixtures, fetchBusinessFixtures } = fixtureActions

function mapStateToProps(state, ownprops) {
  return {
    business: state.Businesses.get('businesses').find((business) => business.id === parseInt(ownprops.match.params.id)),
    fixtures: state.Fixtures.get('fixtures'),
    currentBusinessFixtures: state.Fixtures.get('currentBusinessFixtures'),
    isDateDrawerOpen: state.UI.get('isDateDrawerOpen')
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchBusiness,
    fetchFixtures,
    fetchBusinessFixtures,
    setDateDrawer
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {

    constructor(props) {
      super(props)
    }

    componentDidMount() {
      const { business, fixtures, currentBusinessFixtures, fetchBusiness, fetchFixtures, fetchBusinessFixtures } = this.props;
      if(!business) {
        fetchBusiness(this.props.match.params.id)
      }
      if(fixtures.length === 0) {
        fetchFixtures()
      }
      if(currentBusinessFixtures.length === 0 || currentBusinessFixtures[0].businessId !== this.props.match.params.id) {
        fetchBusinessFixtures(this.props.match.params.id)
      }
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          {...this.state}
        />
      );
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
