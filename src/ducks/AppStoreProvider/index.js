import React from 'react';
import PropTypes from 'prop-types';

import middlewares from '../middlewares';
import { AppStoreContext } from '../AppStoreContext';
import { appReducers, appInitialState } from '../store';
import { createStore } from '../storeHelpers';

export const AppStoreProvider = ({ children }) => {
  const { state, dispatch } = createStore(appReducers, appInitialState, middlewares);

  return <AppStoreContext.Provider value={{ state, dispatch }}>{children}</AppStoreContext.Provider>;
};

AppStoreProvider.propTypes = {
  children: PropTypes.node,
};

AppStoreProvider.defaultProps = {
  children: null,
};
