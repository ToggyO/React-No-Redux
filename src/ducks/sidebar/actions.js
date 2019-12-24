import * as types from './types';

export const changeCurrentTeam = currentTeam => ({
  type: types.CHANGE_CURRENT_TEAM,
  payload: currentTeam,
});
