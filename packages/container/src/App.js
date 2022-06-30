import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import MarketingApp from './components/MartketingApp';
import AuthApp from './components/AuthApp';
import Header from './components/Header';

const generateClassname = createGenerateClassName({
  productionPrefix: 'container',
});

const App = () => {
  return (
    <>
      <BrowserRouter>
        <StylesProvider generateClassName={generateClassname}>
          <Header />
          <Switch>
            <Route path='/auth' component={AuthApp} />
            <Route path='/' component={MarketingApp} />
          </Switch>
        </StylesProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
