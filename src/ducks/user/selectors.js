import { createSelector } from 'reselect';

export const loaderSelector = createSelector(
  state => state.user.loading,
  errors => errors
);

export const userSpinnerSelector = createSelector(
  state => state.user.spinner,
  errors => errors
);

export const userModalLoaderSelector = createSelector(
  state => state.user.modalLoading,
  errors => errors
);

export const userAvatarLoaderSelector = createSelector(
  state => state.user.avatarLoading,
  errors => errors
);

export const userDataSelector = createSelector(
  state => state.user.data.user,
  errors => errors
);

export const userDataLoaderSelector = createSelector(
  state => state.user.data.userLoaded,
  errors => errors
);

export const userCompaniesSelector = createSelector(
  state => state.user.data.companies.items,
  errors => errors
);

export const userCompaniesLoaderSelector = createSelector(
  state => state.user.data.companiesLoaded,
  errors => errors
);

export const userTeamsSelector = createSelector(
  state => state.user.data.teams.items,
  errors => errors
);

export const userTeamsLoaderSelector = createSelector(
  state => state.user.data.teamsLoaded,
  errors => errors
);

export const userProjectsSelector = createSelector(
  state => state.user.data.projects.items,
  errors => errors
);

export const userProjectsLoaderSelector = createSelector(
  state => state.user.data.projectsLoaded,
  errors => errors
);

export const userTeamStatusNameSelector = createSelector(
  state => state.user.data.teams.statusName,
  errors => errors
);

export const userTeamsDeletingSelector = createSelector(
  state => state.user.data.teamsDeleting,
  errors => errors
);

export const errorsSelector = createSelector(
  state => state.user.errors,
  errors => errors
);

export const userExtraSelector = createSelector(
  state => state.user.extra,
  errors => errors
);
