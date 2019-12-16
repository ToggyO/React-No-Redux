import * as types from './types';

export const socketConnectTest = teamId => ({
  type: types.SOCKET_CONNECT_REQUEST,
  payload: teamId,
});
