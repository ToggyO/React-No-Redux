import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { saveUserData, updateUsersData, clearUserData, saveRegistrationStep } from '../middleware';

import auth, { authSagas } from '@ducks/auth';

export default function configureStore() {
  const reducer = combineReducers({ auth });
  const sagas = {
    ...authSagas,
  };
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, saveUserData, updateUsersData, clearUserData, saveRegistrationStep];
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  Object.values(sagas).forEach(saga => sagaMiddleware.run(saga));
  return store;
}
