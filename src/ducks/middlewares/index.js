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

const testMiddleware3 = store => next => action => {
  console.log('Action3 triggered');
  console.log(store);
  console.log(action);
  next(action);
};

export default [testMiddleware, testMiddleware2, testMiddleware3];
