import { createSelector } from 'reselect';

export const authInfoSelector = createSelector(
  state => state.auth.authInfo,
  authInfo => authInfo
);
