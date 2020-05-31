import { combineReducers } from '../storeHelpers';

import { _globalStateModel } from './_global';
import { authStateModel } from './auth';

export * from './_global';
export * from './auth';

const stateModels = [_globalStateModel, authStateModel];

const { reducers, initialState } = combineReducers(stateModels);

export { reducers as appReducers, initialState as appInitialState };

// FIXME: delete
// import { _globalReducer, _globalStateModel } from './_global';
// import { authReducer, authStateModel } from './auth';

// export * from './_global';
// export * from './auth';

// export const combinedReducers = (state, action) => ({
//   global: _globalReducer(state.global, action),
//   auth: authReducer(state.auth, action),
// });

// export const appInitialState = {
//   ..._globalStateModel,
//   ...authStateModel,
// };
