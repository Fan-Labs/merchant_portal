import React from 'react'
import { Upload, Icon, message, Button } from 'antd'
import IntlMessages from '../../components/utility/intlMessages'
import { getValidToken } from '../../helpers/utility'
import Wrapper from './styles'

import AMLModel from '../../models/Verify/EnhancedAML'

const Dragger = Upload.Dragger
const token = getValidToken()
console.log("token "+token)
const props = { // TODO - remember fileList is set from redux state, so need to think of that when displaying uploaded files
  name: 'document',
  action: 'https://api-dev.invictuscapital.com/v2/verification/documents',
  headers: {
    accept: 'application/json',
    'Authorization': `Bearer ${token}`,
  },
  listType: 'text',
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

//TODO upload document should have a dropdown to say which type of document is being uploaded - rather than have two whole separate uploaders

const Uploader = ({uploadedDocuments, upload_queue, queueDocForUpload, removeDocFromQueue, documentType, isLoading, handleUpload, showStepButtons, setInvestStep}) => (
  <Wrapper >
    <Dragger fileList={upload_queue} beforeUpload={queueDocForUpload} onRemove={removeDocFromQueue} {...props} data={{document_type: documentType}}>
      <p className="ant-upload-drag-icon">
        <Icon type="cloud-upload" />
      </p>
      <p className="ant-upload-text">
        <IntlMessages id="upload.click_instructions" />
      </p>
    </Dragger>
    <Button
      type="primary"
      className="upload-button"
      onClick={handleUpload}
      disabled={upload_queue.length === 0}
      loading={isLoading}
    >
      {isLoading ? 'Uploading' : 'Start Upload' }
    </Button>
    <div className="list-title">Uploaded Documents:</div>
    <div className="doc-list">
      {uploadedDocuments.map((doc,i) => 
        <div className="doc-item" key={i}>{doc.name}</div>
      )}
    </div>
    {showStepButtons && (
      <div className="button-row">
        <Button type="normal" onClick={() => setInvestStep(-1)}>
          <Icon type="left" /> <IntlMessages id="kyc.previous" />
        </Button>
        <Button type="normal" disabled={uploadedDocuments.length>0? false : true} onClick={() => setInvestStep()}>
          <IntlMessages id="kyc.next" /> <Icon type="right" />
        </Button>
      </div>
    )}
  </Wrapper>
)

export default AMLModel(Uploader)