import React from 'react';

import middlewares from '../middlewares';
import { AppStoreContext } from '../AppStoreContext';
import { appReducers, appInitialState } from '../store';
import { createStore } from '../storeHelpers';

// eslint-disable-next-line react/prop-types
export const AppStoreProvider = ({ children }) => {
  const { state, dispatch } = createStore(appReducers, appInitialState, middlewares);

  return <AppStoreContext.Provider value={{ state, dispatch }}>{children}</AppStoreContext.Provider>;
};
