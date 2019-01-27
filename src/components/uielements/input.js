import React, { Component } from 'react'
import { Input } from 'antd';
import {
  InputWrapper,
  InputGroupWrapper,
  InputSearchWrapper,
  TextAreaWrapper,
} from './styles/input.style';
import WithDirection from '../../config/withDirection';
import { filterSpecialCharacters } from '../../helpers/utility'

const { Search, TextArea, Group } = Input;

const WDStyledInput = InputWrapper(Input);
const StyledInput = WithDirection(WDStyledInput);

const WDInputGroup = InputGroupWrapper(Group);
const InputGroup = WithDirection(WDInputGroup);

const WDInputSearch = InputSearchWrapper(Search);
const InputSearch = WithDirection(WDInputSearch);

const WDTextarea = TextAreaWrapper(TextArea);
const Textarea = WithDirection(WDTextarea);

class FormInput extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    const { input } = this.props
    let replaced
    if(this.props.type==="password") {
      replaced = event.target.value
    } else {
      replaced = filterSpecialCharacters(event.target.value)
    }
    input.onChange(replaced)
  }

  render() {
    const { input, meta: { error }, ...custom } = this.props
    return (
      <div>
      <StyledInput {...input} onChange={this.onChange} {...custom} />
      <span style={{color: 'red'}}>{error}</span>
      </div>
    )
  }
}


class DefaultInput extends Component {

  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.state = {
      value: null,
    }
  }

  onChange(event) {
    let replaced
    if(this.props.type==="password") {
      replaced = event.target.value
    } else {
      replaced = filterSpecialCharacters(event.target.value)
    }
    event.target.value = replaced
    if(this.props.onChange) {
      this.props.onChange(event)
    }
    this.setState({
      value: replaced
    })
  }

  render() {
    const { value } = this.state
    return (
    <StyledInput {...this.props} value={value} onChange={this.onChange}  />
    )
  }
}


export default DefaultInput;
export { InputSearch, InputGroup, Textarea,  FormInput as formInput };



