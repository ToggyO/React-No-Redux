import { _globalReducer, _globalStateModel } from './_global';
import { authReducer, authStateModel } from './auth';

export * from './_global';
export * from './auth';

export const combineReducers = (state, action) => ({
  global: _globalReducer(state.global, action),
  auth: authReducer(state.auth, action),
});

export const appInitialState = {
  ..._globalStateModel,
  ...authStateModel,
};
