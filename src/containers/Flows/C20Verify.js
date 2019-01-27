import React from 'react'
import IntlMessages from '../../components/utility/intlMessages';
import { Icon, Spin, Progress } from 'antd'
import Button from '../../components/uielements/button'
import { Textarea } from '../../components/uielements/input'
import sample from './data.json'
import C20Wrapper from './C20Verify.style'
import HowTo from './HowToModal'
import C20VerifyModel from '../../models/Verify/C20Verify'

const C20Verify = ({ apiMessage, c20Message, retrieveError, isLoading, isC20Verified, verifyString, isValid, errorMessage }) => (
  <C20Wrapper>
    {isC20Verified? (
      <div className="verified">
        <IntlMessages id="dashboard.C20Confirmed" /><br/>
        <Progress type="circle" percent={100} />
      </div>
    ) : (
      <React.Fragment>
        <div className="explainer">
          <IntlMessages id="c20Verify.explainer" />
          <br />
          {isLoading? (
            <div className="signThis">   
              <Spin size="large" />
            </div>        
          ) : (
            <React.Fragment>
              {c20Message && (
                <div className="signThis">
                  <IntlMessages id="c20Verify.signThis" /> 
                  <b>{c20Message}</b>
                </div>
              )}
            </React.Fragment>
          )}
          {retrieveError && (
            <div className="signThisError">
              <IntlMessages id={retrieveError} /> 
            </div>
          )}
          <HowTo />
        </div>
        <div className="jsonText">
          <Textarea autosize={true} placeholder={JSON.stringify(sample, undefined, 4)} onChange={this.textEdit} value={verifyString} />
          <div className="verifyRow">
            <Button type="primary" className="verifyButton" onClick={this.validate} disabled={!isValid}>Verify</Button>
            { apiMessage && (<div className="errorMessage"><IntlMessages id={apiMessage} /></div>)}
            { errorMessage && !apiMessage && (<div className="errorMessage"><IntlMessages id={errorMessage} /></div>)}
            { isValid ? (
              <div>
                <Icon type="check-circle" style={{color: 'green', fontSize: '22px', marginRight: '5px'}}/><IntlMessages id="c20Verify.validJSON" />
              </div>
              ) : (
              <div>
                <Icon type="exclamation-circle" style={{color: 'red', fontSize: '22px', marginRight: '5px'}} /><IntlMessages id="c20Verify.invalidJSON" />
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    )}
  </C20Wrapper>
)

export default C20VerifyModel(C20Verify)