import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Header from './components/Header';
import Progress from './components/Progress';

const generateClassname = createGenerateClassName({
  productionPrefix: 'container',
});

const MarketingApp = lazy(() => import('./components/MartketingApp'));
const AuthApp = lazy(() => import('./components/AuthApp'));

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const signInHandler = () => {
    setIsSignedIn(true);
  };

  const singOutHandler = () => {
    setIsSignedIn(false);
  };

  return (
    <>
      <BrowserRouter>
        <StylesProvider generateClassName={generateClassname}>
          <Header signedIn={isSignedIn} onSignOut={singOutHandler} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path='/auth'>
                <AuthApp onSignIn={signInHandler} />
              </Route>
              <Route path='/' component={MarketingApp} />
            </Switch>
          </Suspense>
        </StylesProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
