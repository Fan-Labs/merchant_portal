import React from 'react'
import IntlMessages from '../../components/utility/intlMessages'
import LayoutContentWrapper from '../../components/utility/layoutWrapper'
import LayoutContent from '../../components/utility/layoutContent'
import DashboardWrapper from './Dashboard.style'
import BusinessCardList from '../Businesses/BusinessCardList'
import TeamsList from '../Teams/TeamsList'
import DashboardModel from '../../models/Dashboard/Dashboard'

const Dashboard = ({ name, kycStatus, isNew }) => (
  <LayoutContentWrapper>
    <LayoutContent>
      <DashboardWrapper>
        <div className="column">
          <div className="welcomeRow">
            <div>
              <div className="welcomeMessage">
                <IntlMessages id="dashboard.welcomeMessage"
                  values={{ name: name }}
                />
                {isNew && (
                  <IntlMessages id="dashboard.thankYou" />
                )}
              </div>
{  /*            <div className="instructions">
                <IntlMessages id="dashboard.introText" />
              </div>
  */ }
            </div>
          </div>
          <BusinessCardList />
          <br/><br/><br/>
          <TeamsList />
        </div>
      </DashboardWrapper>
    </LayoutContent>
  </LayoutContentWrapper>
)


export default DashboardModel(Dashboard);