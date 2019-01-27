import React, { Component } from 'react'
import COUNTRIES from '../../constants/countries.json'
import COUNTRIES2 from '../../constants/countries_customlist.json'
import Wrapper from './styles/countrySelector.style'
import {AutoComplete} from 'antd'

export default class extends Component {
  constructor(props) {
    super(props)

    this.isDisabled = this.isDisabled.bind(this)
    this.filter = this.filter.bind(this)
    this.checkInput = this.checkInput.bind(this)
  }

  isDisabled(code) {

    if(code === 'USA' || code === 'ZAF' || code === 'CYM') {
      return true
    }

    return false
  }

  filter(inputValue, option) {
    return option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
  }

  checkInput(value) {
    if(value==="") {
      this.props.input.onChange(value)
    }
  }

  render() {
    const { input: { value, onChange }, meta: { error } } = this.props


      if(this.props.input.name === "address_country"){
          return (
          <Wrapper>
              <AutoComplete
                  onSelect={onChange}
                  onChange={this.checkInput}
                  value={value}
                  dataSource={COUNTRIES2}
                  filterOption={this.filter}
                  allowClear={false}
              />
              <span style={{color: 'red'}}>{error}</span>
          </Wrapper>
          )
      }else {
          return (
              <Wrapper>
                  <AutoComplete
                      onSelect={onChange}
                      onChange={this.checkInput}
                      value={value}
                      dataSource={COUNTRIES}
                      filterOption={this.filter}
                      allowClear={false}
                  />
                  <span style={{color: 'red'}}>{error}</span>
              </Wrapper>
          )
      }
  }
}

// class Region extends Component {

//   render() {
//     const { input: { value, onChange }, country} = this.props
//     return (
//       <Wrapper>
//         <RegionDropdown
//           country={country}
//           classes="ant-select ant-select-enabled select"
//           value={value}
//           onChange={onChange}
//           countryValueType="short"
//           />
//       </Wrapper>
//     )
//   }
// }

// const selector = formValueSelector('kyc')
// const RegionSelector = connect(state => ({
//   country: selector(state, 'address_country'),
// }))(Region)
// export { RegionSelector }


