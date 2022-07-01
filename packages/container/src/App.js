import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Header from './components/Header';
import Progress from './components/Progress';

const generateClassname = createGenerateClassName({
  productionPrefix: 'container',
});

const history = createBrowserHistory();

const MarketingApp = lazy(() => import('./components/MartketingApp'));
const AuthApp = lazy(() => import('./components/AuthApp'));
const DashboardApp = lazy(() => import('./components/DashboardApp'));

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    }
  }, [isSignedIn]);

  const signInHandler = () => {
    setIsSignedIn(true);
  };

  const singOutHandler = () => {
    setIsSignedIn(false);
  };

  return (
    <>
      <Router history={history}>
        <StylesProvider generateClassName={generateClassname}>
          <Header signedIn={isSignedIn} onSignOut={singOutHandler} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path='/auth'>
                <AuthApp onSignIn={signInHandler} />
              </Route>
              <Route path='/dashboard'>
                {!isSignedIn && <Redirect to='/auth/signin' />}
                <DashboardApp />
              </Route>
              <Route path='/' component={MarketingApp} />
            </Switch>
          </Suspense>
        </StylesProvider>
      </Router>
    </>
  );
};

export default App;
