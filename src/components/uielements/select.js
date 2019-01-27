import React, { Component } from 'react'
import { Select } from 'antd';
import { AntSelect } from './styles/select.style';
import IntlMessages from '../utility/intlMessages';
import WithDirection from '../../config/withDirection';

const WDSelect = AntSelect(Select);
const IsoSelect = WithDirection(WDSelect);
const SelectOption = Select.Option;

class formSelect extends Component {
  render() {
    const { input, data } = this.props

    return (
      <IsoSelect {...input}>
        {data.map((item, i) =>
          <SelectOption value={item.value}>
            <IntlMessages id={item.key} />
          </SelectOption>
        )}
      </IsoSelect>
    )
  }
}


export default IsoSelect;
export { SelectOption, formSelect };



