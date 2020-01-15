import * as types from './types';

export const changeCurrentTeam = ({ id, name }) => ({
  type: types.CHANGE_CURRENT_TEAM,
  payload: { id, name },
});
