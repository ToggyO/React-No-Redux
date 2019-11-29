import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  saveUserData,
  updateUsersData,
  clearUserData,
  saveRegistrationStep,
  showWarning,
} from '../middleware';

import auth, { authSagas } from '@ducks/auth';
import modal from '@ducks/modal';
import global from '@ducks/global';

export default function configureStore() {
  const reducer = combineReducers({ auth, modal, global });
  const sagas = {
    ...authSagas,
  };
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    sagaMiddleware,
    saveUserData,
    updateUsersData,
    clearUserData,
    saveRegistrationStep,
    showWarning,
  ];
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  Object.values(sagas).forEach(saga => sagaMiddleware.run(saga));
  return store;
}
