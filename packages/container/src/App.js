import React, { lazy, Suspense } from 'react';
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
  return (
    <>
      <BrowserRouter>
        <StylesProvider generateClassName={generateClassname}>
          <Header />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path='/auth' component={AuthApp} />
              <Route path='/' component={MarketingApp} />
            </Switch>
          </Suspense>
        </StylesProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
