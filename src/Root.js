import React from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';

import Routes from '@routes';
import { ErrorBoundary, ScrollToTop } from '@components';
import { AppStoreProvider } from '@ducks';

import './styles/index.sass';

const Root = () => (
  <AppStoreProvider>
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      <ErrorBoundary>
        <ScrollToTop>{renderRoutes(Routes)}</ScrollToTop>
      </ErrorBoundary>
    </BrowserRouter>
  </AppStoreProvider>
);

export default Root;
