import { createSelector } from 'reselect';

export const currentTeamSelector = createSelector(
  state => state.sidebar.currentTeam,
  errors => errors
);

export const sidebarLoaderSelector = createSelector(
  state => state.sidebar.loading,
  errors => errors
);
