import React from 'react'
import { Upload, Icon, message } from 'antd'
import IntlMessages from '../../components/utility/intlMessages'
import Button from '../../components/uielements/button'
import AMLWrapper from './EnhancedAML.style'

import AMLModel from '../../models/Verify/EnhancedAML'

const Dragger = Upload.Dragger

const props = { // TODO - remember fileList is set from redux state, so need to think of that when displaying uploaded files
  name: 'file',
  action: 'https://api-dev.invictuscapital.com/v1/aml/document',
};


const EnhancedAML = ({aml_docs, upload_queue, queueDocForUpload, removeDocFromQueue, setKYCStep, checkKYCstatus, showStepButtons=false}) => (
  <AMLWrapper >
    <div className="page-title">
      Enhanced AML (Aren't a Money Launderer)
    </div>
    <div className="explainer">
      <IntlMessages id="aml.instructions" />
      <ul>
        <li><IntlMessages id="aml.list_1" /></li>
        <li><IntlMessages id="aml.list_2" /></li>
        <li><IntlMessages id="aml.list_3" /></li>
      </ul>
    </div>
    <Dragger fileList={upload_queue} beforeUpload={queueDocForUpload} onRemove={removeDocFromQueue} {...props}>
      <p className="ant-upload-drag-icon">
        <Icon type="cloud-upload" />
      </p>
      <p className="ant-upload-text">
        <IntlMessages id="upload.click_instructions" />
      </p>
      <p className="ant-upload-hint">Support for a single or bulk upload.</p>
    </Dragger>
    {showStepButtons && (
      <div className="button-row">
        <Button type="normal" onClick={() => setKYCStep('USER_DETAILS')}>
          <Icon type="left" /> <IntlMessages id="kyc.previous" />
        </Button>
        <Button type="normal" onClick={() => setKYCStep('JUMIO')}>
          <IntlMessages id="kyc.next" /> <Icon type="right" />
        </Button>
      </div>
    )}
  </AMLWrapper>
)

export default AMLModel(EnhancedAML)