import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { AppLocale } from './dashApp'
import { LocaleProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import { isLoggedIn } from './helpers/utility'

import App from './containers/App/App';
import asyncComponent from './helpers/AsyncFunc';

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => isLoggedIn
      ? <Component {...props} />
      : <Redirect
          to={{
            pathname: '/signin',
            state: { from: props.location },
          }}
        />}
  />
);

const SignedinRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => isLoggedIn
      ? <Redirect
          to={{
            pathname: '/app',
            state: { from: props.location },
          }}
        />
      : <Component {...props} />
    }
  />
);

const PublicRoutes = ({ history, isLoggedIn, locale }) => (
  <LocaleProvider locale={AppLocale[locale].antd}>
    <IntlProvider
      locale={AppLocale[locale].locale}
      messages={AppLocale[locale].messages}
    >
      <ConnectedRouter history={history}>
        <div>
          <SignedinRoute
            exact
            isLoggedIn={isLoggedIn}
            path={'/'}
            component={asyncComponent(() => import('./containers/Page/signin'))}
          />
          <SignedinRoute
            exact
            isLoggedIn={isLoggedIn}
            path={'/signin'}
            component={asyncComponent(() => import('./containers/Page/signin'))}
          />
          <Route
            exact
            path={'/signup'}
            component={asyncComponent(() => import('./containers/Page/signup'))}
          />
          <Route
            exact
            path={'/forgotpassword'}
            component={asyncComponent(() =>
              import('./containers/Page/forgotPassword'))}
          />
          <Route
            exact
            path={'/passwordreset'}
            component={asyncComponent(() =>
              import('./containers/Page/resetPassword'))}
          />
          <Route
            exact
            path={'/verify'}
            component={asyncComponent(() =>
              import('./containers/Page/verifyMail'))}
          />
          <RestrictedRoute
            path="/app"
            component={App}
            isLoggedIn={isLoggedIn}
          />
        </div>
      </ConnectedRouter>
    </IntlProvider>
  </LocaleProvider>
)

export default connect(state => ({
  isLoggedIn: isLoggedIn(),
  locale: state.LanguageSwitcher.toJS().language.locale,
}))(PublicRoutes);
