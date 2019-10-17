import React, { useEffect } from 'react';
import { Router } from 'react-router-dom';

import Routes from '@routes';
import history from '@services/history';

import { ErrorBoundary } from '@components/ErrorBoundary';
import { ScrollToTop } from '@components/ScrollToTop';
import { getWindowDimensions } from '@utils/index';

import './styles/index.sass';

const Root = () => {
  useEffect(() => {
    document.getElementById('root').style.minHeight = `${getWindowDimensions().height}px`;
  }, []);

  return (
    <ErrorBoundary>
      <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
        <ScrollToTop>
          <Routes />
        </ScrollToTop>
      </Router>
    </ErrorBoundary>
  );
};

export default Root;
