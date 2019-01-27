import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import investActions from '../../redux/invest/actions'
import authActions from '../../redux/auth/actions'

const { fetchAMLDocList, uploadDocuments } = authActions
const { setInvestStep } = investActions

function mapStateToProps(state, ownprops) {
  return {
    isLoading: state.App.get('isLoading'),
    uploadedDocuments: state.Auth.get('aml_docs').filter(doc => doc.type===ownprops.documentType) // TODO: filter by TYPE
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchAMLDocList,
    uploadDocuments,
    setInvestStep
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {
    constructor(props) {
      super(props)
      this.state = {
        upload_queue: [],
      }
      this.queueDocForUpload = this.queueDocForUpload.bind(this)
      this.removeDocFromQueue = this.removeDocFromQueue.bind(this)
      this.handleUpload = this.handleUpload.bind(this)
    }

    componentDidMount() {
      this.props.fetchAMLDocList(this.props.documentType)
    }

    queueDocForUpload(doc) {
    
      this.setState(({ upload_queue }) => ({
          upload_queue: [...upload_queue, doc],
        }));
      return false;
    }

    removeDocFromQueue(doc) {
      this.setState(({ upload_queue }) => {
        const index = upload_queue.indexOf(doc);
        const newFileList = upload_queue.slice();
        newFileList.splice(index, 1);
        return {
          upload_queue: newFileList,
        };
      });
    }

    handleUpload() {
      const {upload_queue} = this.state
      const {documentType} = this.props
      debugger
      this.props.uploadDocuments(upload_queue, documentType)
    }

    render() {
      console.log(this.props.uploadedDocuments)
      return (
        <ComposedComponent
          {...this.props}
          {...this.state}
          queueDocForUpload={this.queueDocForUpload}
          removeDocFromQueue={this.removeDocFromQueue}
          handleUpload={this.handleUpload}
          
        />
      );
    }
  }

  Container.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    documentType: PropTypes.string.isRequired,

  }

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
