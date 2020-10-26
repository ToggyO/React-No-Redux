/* eslint-disable */
import React, { useReducer } from 'react';
import logger from 'use-reducer-logger';

import { AppStoreContext } from '@ducks/AppStoreContext';
import { isDEV } from '@config';

/**
 * Create app redux-like store
 * @param {object} reducers - object of combined reducers
 * @param {object} initialState - object of combined initial state
 * @param {Array<Function>} middlewares - array of middleware functions
 * @returns {{ state: object, dispatch: Function }} - store with relevant state and dispatch function
 */
export function createStore(reducers = {}, initialState = {}, middlewares) {
  const storeWithLogger = isDEV ? logger(reducers) : reducers;

  const [state, dispatch] = useReducer(storeWithLogger, initialState);

  if (typeof middlewares !== 'undefined') {
    const middlewareAPI = {
      getState: () => state,
      dispatch: action => dispatch(action),
    };

    const chain = middlewares.map(middleware => middleware(middlewareAPI));

    const enhancedDispatch = compose(...chain)(dispatch);

    return { state, dispatch: enhancedDispatch };
  }

  return { state, dispatch };
}

/**
 * Create composition of the dispached functions
 * @param {Array<Function>} funcs
 * @returns {Array<Function>} - array of middleware functions
 */
export function compose(...funcs) {
  if (funcs.length === 0) return arg => arg;
  if (funcs.length === 1) return funcs[0];

  const last = funcs[funcs.length - 1];
  const rest = funcs.slice(0, -1);
  return (...args) => rest.reduceRight((composed, f) => f(composed), last(...args));
}

/**
 * Comine reducers and create app initial state
 * @param {Array<object>} models - array of state models
 * @returns {{ reducers, initialState }} - object, contains combined reducers and combined app initial state
 */
export const combineReducers = (models = []) => {
  const { reducers, initialState } = models.reduce(
    (acc, model) => {
      const { namespace, state, reducer } = model;
      acc.reducers[namespace] = reducer;
      acc.initialState[namespace] = state;
      return acc;
    },
    { reducers: {}, initialState: {} }
  );

  const calledReducers = (state, action) =>
    Object.entries(reducers).reduce((acc, [reducerName, reducer]) => {
      acc[reducerName] = reducer(state[reducerName], action);
      return acc;
    }, {});
  return { reducers: calledReducers, initialState };
};

/**
 * Provides its connected component with the pieces of the data it needs from the store,
 * and the functions it can use to dispatch actions to the store
 * @param {Function} [mapStateToProps] - subscribe wrappeed component to store updates
 * @param {Function | Object} [mapDispatchToProps] - provides aility to dispatch actions
 * or call action creators in wrapped component
 * @param {React.Component} WrappedComponent - wrapped react component
 * @returns {React.Component} - new component with old and new props
 */
export function connect(mapStateToProps, mapDispatchToProps) {
  return function(WrappedComponent) {
    return class extends React.Component {
      static contextType = AppStoreContext;

      render() {
        const { state, dispatch } = this.context;
        if (!mapStateToProps) {
          mapStateToProps = () => null;
        }

        if (!mapDispatchToProps) {
          mapDispatchToProps = () => null;
        }

        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(state, this.props)}
            {...mapDispatchToProps(dispatch, this.props)}
          />
        );
      }
    };
  };
}
