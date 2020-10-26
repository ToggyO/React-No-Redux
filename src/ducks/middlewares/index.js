import api from '@services/api';

import { authTypes } from '../store/auth';

const testMiddleware = store => next => action => {
  console.log('Action triggered');
  console.log(store);
  console.log(action);
  next(action);
};

const testMiddleware2 = store => next => action => {
  console.log('Action2 triggered');
  console.log(store);
  console.log(action);
  next(action);
};

// eslint-disable-next-line no-unused-vars,consistent-return
const logOutMiddleware = store => next => action => {
  if (action.type === authTypes.LOG_OUT) {
    return Promise.resolve(api.auth.logOut());
  }
  next(action);
};

export default [testMiddleware, testMiddleware2, logOutMiddleware];
