import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Geosuggest from 'react-geosuggest'
import GeoSuggestWrapper from './geoSuggest.style'
import businessActions from '../../redux/businesses/actions'

const {setPlacesAPIBusiness} = businessActions

function mapStateToProps(state, ownprops) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  	setPlacesAPIBusiness
  }, dispatch);
}

class GeoSuggestInput extends Component {
  constructor(props) {
    super(props)
    this.geoRef = React.createRef();
    this.onChange = this.onChange.bind(this)
    this.onSuggestSelect = this.onSuggestSelect.bind(this)
  }

  onChange(value) {
    const { input } = this.props
    input.onChange(value)
  }

  onSuggestSelect(suggest) {
  	console.log(suggest)
  	this.props.setPlacesAPIBusiness(suggest)
  }

  componentDidUpdate(prevProps) {
  	if(prevProps.input.value != this.props.input.value) {
 		this.geoRef.update(this.props.input.value)
  	}
  }

  render() {
    const { input: {value}, meta: { error }, onlyPlaces = false, ...custom } = this.props
    return (
      <GeoSuggestWrapper>
	      <Geosuggest
	          ref={el=>this.geoRef=el}
	          types={onlyPlaces? ['establishment']: null}
	          placeholder="Start typing..."
	          onChange={this.onChange}
	          minLength={3}
	          country="za"
	          value={value}

	          onSuggestSelect={this.onSuggestSelect}
	       />
	      <span style={{color: 'red'}}>{error}</span>
      </GeoSuggestWrapper>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeoSuggestInput)