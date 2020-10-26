import { combineReducers } from '../storeHelpers';

import { _globalStateModel } from './_global';
import { authStateModel } from './auth';
import { citiesStateModel } from './cities';

export * from './_global';
export * from './auth';

const stateModels = [_globalStateModel, authStateModel, citiesStateModel];

const { reducers, initialState } = combineReducers(stateModels);

export { reducers as appReducers, initialState as appInitialState };
