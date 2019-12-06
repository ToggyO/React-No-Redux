import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import Portals from './Portals';
import { store } from './store';

import Routes from '@routes';
import history from '@services/history';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { ScrollToTop } from '@components/ScrollToTop';

// import { getWindowDimensions } from '@utils/index';
import './styles/index.sass';

const Root = () => {
  useEffect(() => {
    // document.getElementById('root').style.minHeight = `${getWindowDimensions().height}px`;
    // superaxios.delete('/users/12eab851-840d-4efb-b332-43e302e55d2c').then(res => console.log(res), err => console.log(err))
  }, []);

  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
          <Portals />
          <ScrollToTop>
            <Routes />
          </ScrollToTop>
        </Router>
      </ErrorBoundary>
    </Provider>
  );
};

export default Root;
