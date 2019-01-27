import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Alert } from 'antd';
import IntlMessages from '../../components/utility/intlMessages';
import SignInStyleWrapper from './signin.style';


class Maintainence extends Component {
  
  render() {
    return (
      <SignInStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent" style={{width: '65%'}}>
            <div className="isoLogoWrapper">
              <Link to="/signin">
                <IntlMessages id="page.signInTitle" />
              </Link>
            </div>
            <Alert
              message="Site Under Maintenance"
              type="info"
              showIcon
            />
            <form className="isoSignInForm">
              <div className="message-title">
                Message from the CEO, 
              </div>
              <div className="message-body">
                Good day to all, if anyone is still having issues accessing the portal at the end of the $0.095 phase we will add another day to the pre-sale period. We deeply apologize for the frustrating experience and it is most certainly not reflective of our core values and culture - our community is our most important asset.
                <br /><br />
                There is no need for concern regarding safety - login issues have been caused by a processing 'bottleneck' in the services that were designed internally for this ICO. This does not affect any other systems in use by Invictus. We did not use any third-party services or APIs and have faced some teething issues. These should definitely have been ironed out by the public launch and there is no excuse for the level of service that users have faced so far.
                <br /><br />
                I have implemented new processes for the engineering team to follow with stricter quality assurance tests - never again will a product launch in this state, even if we have to take slightly longer to deliver. You have my word.
                <br /><br />
                We are trying to move at breakneck speeds to deliver effective products to our community on very aggressive deadlines, and in this sprint, we stumbled. I regret that I was unable to oversee the finer details of the technical delivery as we are rapidly expanding and transitioning into a more sophisticated corporate structure with department and team leads who I trusted would deliver the quality you have come to expect.
                <br /><br />
                Thank you for sticking with us. We are working extremely hard behind the scenes to continue processing projects for Hyperion - the future of the cryptocurrency market is very bright and as early adopters we stand to see some truly amazing developments in our time. This will be the first and last bump in the road to delivering on this fund for our community and we foresee no delays in our roadmap and the deployment of capital.
                <br /><br />
                Kind regards,<br />
                <b>Daniel Schwartzkopff,
                CEO, <br />Invictus Capital</b>
              </div>
            </form>
          </div>
        </div>
      </SignInStyleWrapper>
    );
  }
}

export default Maintainence
