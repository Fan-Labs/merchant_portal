import React from 'react'
import moment from 'moment'
import Timeline, { TimelineItem } from '../../components/uielements/timeline'
import { fund_timelines } from '../../constants'
import KycAlert from '../Dashboard/Alerts'
import InvestWrapper from './Invest.style'
import Steps from './Steps'
import Terms from './Terms'
import InvestModel from '../../models/Invest/Invest'

const Invest = ({ fund, isKYCVerified, logoUrl, kycStatus, isOpen, termsAgreed, agree }) => (
  <InvestWrapper logoUrl={logoUrl}>
    {/*
    <div className="titleRow" >
      <div className="logo" />
    </div>
    */}
    <div className="InvestContent">
      <Timeline className="timeline">
    {
      fund_timelines[fund].map((item, i) => {
        const isPast = moment().isAfter(moment(item.date))
        return (<TimelineItem key={`timeline_${i}`} color={isPast? 'green':'blue'}>{moment(item.date).format('DD/MM/YYYY')} {item.label}</TimelineItem>)
      })
    }
      </Timeline>
      <div className="column">
        {!isKYCVerified && (
          <KycAlert kycStatus={kycStatus} />
        )}
          <React.Fragment>
            { termsAgreed? <Steps fund={fund} /> : <Terms agree={agree} />  }
          </React.Fragment>
        {isOpen && isKYCVerified && (
          <React.Fragment>
            { termsAgreed? <Steps fund={fund} /> : <Terms agree={agree} />  }
          </React.Fragment>
        )}

      </div>
    </div>
    <br /><br />
  </InvestWrapper>
)

export default InvestModel(Invest);

