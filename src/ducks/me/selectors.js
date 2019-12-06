import { createSelector } from 'reselect';

export const userLoaderSelector = createSelector(
  state => state.user.loading,
  errors => errors
);

export const userDataSelector = createSelector(
  state => state.user.data.user,
  errors => errors
);

export const userCompaniesSelector = createSelector(
  state => state.user.data.companies,
  errors => errors
);

export const userTeamsSelector = createSelector(
  state => state.user.data.teams,
  errors => errors
);

export const userProjectsSelector = createSelector(
  state => state.user.data.projects,
  errors => errors
);

// export const errorsSelector = createSelector(
//   state => state.auth.errors,
//   errors => errors
// );
