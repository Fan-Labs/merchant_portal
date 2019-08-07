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
          path={`${url}/businesses/new`}
          component={asyncComponent(() => import('../Businesses/CreateBusiness'))}
        />
        <Route
          exact
          path={`${url}/business/:id`}
          component={asyncComponent(() => import('../Businesses/Business/BusinessPage'))}
        />
        <Route
          exact
          path={`${url}/offers`}
          component={asyncComponent(() => import('../Offers/Offers'))}
        />      
        <Route
          exact
          path={`${url}/settings`}
          component={asyncComponent(() => import('../Settings/Settings'))}
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
