import * as types from './types';

export const socketConnect = url => ({
  type: types.SOCKET_CONNECT_REQUEST,
  payload: url,
});

export const subscribeOnNotificationsChannel = (subscribeMethod, watchMethod, data) => ({
  type: types.SUBSCRIBE_ON_NOTIFICATIONS_REQUEST,
  payload: {
    subscribeMethod,
    watchMethod,
    data,
  },
});
