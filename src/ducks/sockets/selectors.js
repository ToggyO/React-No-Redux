import { createSelector } from 'reselect';

import { API_URL } from '@config/apiUrl';

export const notificationsSelector = createSelector(
  state => state.socket.connections[API_URL.SOCKET.NOTIFICATIONS],
  errors => errors
);
