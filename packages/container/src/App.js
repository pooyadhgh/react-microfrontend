import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import MarketingApp from './components/MartketingApp';
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
          <MarketingApp />
        </StylesProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
