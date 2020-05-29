import React, { useReducer } from 'react';

import { AppStoreContext } from './AppStoreContext';
import { combineReducers, appInitialState } from './store';

// eslint-disable-next-line react/prop-types
const AppStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(combineReducers, appInitialState);

  return <AppStoreContext.Provider value={{ state, dispatch }}>{children}</AppStoreContext.Provider>;
};

export { AppStoreProvider, AppStoreContext };
