import React from 'react';
import { Switch, Route } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';

class AppRouter extends React.Component {
  render() {
    const { url } = this.props;
    return (
      <Switch>
        <Route
          exact
          path={`${url}/`}
          component={asyncComponent(() => import('../Dashboard/Dashboard'))}
        />
        <Route
          exact
          path={`${url}/dashboard`}
          component={asyncComponent(() => import('../Dashboard/Dashboard'))}
        />
        <Route
          exact
          path={`${url}/:fund/invest`}
          component={asyncComponent(() => import('../FundPages/Invest'))}
        />
        <Route
          exact
          path={`${url}/:fund/history`}
          component={asyncComponent(() => import('../FundPages/History'))}
        />
        <Route
          exact
          path={`${url}/:fund/claim`}
          component={asyncComponent(() => import('../FundPages/Claim'))}
        />
        <Route
          exact
          path={`${url}/:fund/overview`}
          component={asyncComponent(() => import('../FundPages/Overview'))}
        />          
        <Route
          exact
          path={`${url}/crypto20/history`}
          component={asyncComponent(() => import('../Crypto20/History'))}
        />
        <Route
          exact
          path={`${url}/crypto20/liquidate`}
          component={asyncComponent(() => import('../Crypto20/Liquidate'))}
        />    
        <Route
          exact
          path={`${url}/crypto20/exchange`}
          component={asyncComponent(() => import('../Crypto20/Exchange'))}
        />  
        <Route
          exact
          path={`${url}/settings`}
          component={asyncComponent(() => import('../Settings/Settings'))}
        />
        <Route
          exact
          path={`${url}/kycverification`}
          component={asyncComponent(() => import('../KYC/Kyc'))}
        />
        <Route
          exact
          path={`${url}/c20verification`}
          component={asyncComponent(() => import('../C20Verify/index'))}
        />
        <Route
          exact
          path={`${url}/kyc_status`}
          component={asyncComponent(() => import('../KYC/VerifySuccess'))}
        />
        <Route
          exact
          path={`${url}/password`}
          component={asyncComponent(() => import('../Settings/Password'))}
        />
      </Switch>
    );
  }
}

export default AppRouter;
