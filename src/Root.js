import React from 'react';
import { Test } from '@components/Test';
import { ErrorBoundary } from '@components/ErrorBoundary';

const Root = () => (
  <ErrorBoundary>
    <Test />
  </ErrorBoundary>
);

export default Root;
