import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import offersActions from '../../redux/offers/actions'

const { fetchOffers } = offersActions

function mapStateToProps(state, ownprops) {
  return {
    offers: state.Offers.get('offers'),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchOffers
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {

    constructor(props) {
      super(props)
      this.state = {
        isModalOpen: false,
      }
      this.openModal = this.openModal.bind(this)
      this.closeModal = this.closeModal.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    openModal() {
      console.log('open')
      this.setState({isModalOpen: true})
    }

    closeModal() {
      console.log('close')
      this.setState({isModalOpen: false})
    }

    handleSubmit(values) {
      console.log(values)
    }

    componentDidMount() {
      if (this.props.offers.length < 1) {
        this.props.fetchOffers() 
      }
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          {...this.state}
          openModal={this.openModal}
          closeModal={this.closeModal}
        />
      );
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
