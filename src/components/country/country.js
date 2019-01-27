import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'

class Country extends Component {

  handleChange = value => {
    this.props.input.onChange(value)
  };

  render() {
    const { input, label, meta: { touched, error }, children, ...custom } = this.props
    return (
      <CountryDropdown
        value={input.value}
        onChange={this.handleChange}
        {...input}
        {...custom}
        />
    )
  }
}

class Region extends Component {

  handleChange = value => {
    this.props.input.onChange(value)
  };

  render() {
    const { input, label, meta: { touched, error }, children, ...custom } = this.props
    return (
      <RegionDropdown
        value={input.value}
        onChange={this.handleChange}
        {...input}
        {...custom}
        />
    )
  }
}

