/* eslint-disable import/no-duplicates */
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { saveUserData, updateUsersData, clearUserData, saveRegistrationStep } from '../middleware';

import auth from '@ducks/auth';
import modal from '@ducks/modal';
import global from '@ducks/global';
import user from '@ducks/user';

import { authSagas } from '@ducks/auth';
import { userSagas } from '@ducks/user';

// console.log(auth);
// console.log(modal);
// console.log(global);
// console.log(user);
// console.log(meSagas);
export default function configureStore() {
  const reducer = combineReducers({ auth, modal, global, user });

  const sagas = {
    ...authSagas,
    ...userSagas,
  };
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, saveUserData, updateUsersData, clearUserData, saveRegistrationStep];
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  Object.values(sagas).forEach(saga => sagaMiddleware.run(saga));
  return store;
}
