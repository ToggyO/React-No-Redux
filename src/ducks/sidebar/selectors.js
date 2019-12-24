import { createSelector } from 'reselect';

export const currentTeamSelector = createSelector(
  state => state.sidebar.currentTeam,
  errors => errors
);
