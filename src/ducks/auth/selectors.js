import { createSelector } from 'reselect';

export const errorsSelector = createSelector(
  state => state.auth.errors,
  errors => errors
);

export const loadingSelector = createSelector(
  state => state.auth.loading,
  loading => loading
);

export const registerStepSelector = createSelector(
  state => state.auth.data.registrationStep.step,
  errors => errors
);

export const userRoleSelector = createSelector(
  state => state.auth.data.registrationStep.statusName,
  errors => errors
);

export const uiThemeSelector = createSelector(
  state => state.auth.data.user.uiTheme,
  errors => errors
);

export const userInfoSelector = createSelector(
  state => state.auth.data.user,
  errors => errors
);

export const extraSelector = createSelector(
  state => state.auth.extra,
  errors => errors
);
