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
  state => state.user.data.companies.items,
  errors => errors
);

export const userTeamsSelector = createSelector(
  state => state.user.data.teams.items,
  errors => errors
);

export const userProjectsSelector = createSelector(
  state => state.user.data.projects.items,
  errors => errors
);

// export const errorsSelector = createSelector(
//   state => state.auth.errors,
//   errors => errors
// );
