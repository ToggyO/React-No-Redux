import * as types from './types';

const initialState = {
  data: {},
  connections: {},
  isNotifyConnected: false,
  errors: [],
  extra: '',
};

export default function socket(state = initialState, action) {
  switch (action.type) {
    case types.SOCKET_CONNECT_SUCCESS: {
      const { url, connection } = action.payload;
      return {
        ...state,
        connections: {
          ...state.connections,
          [url]: connection,
        },
      };
    }
    case types.SOCKET_NOTIFY_CONNECTED:
      return { ...state, isNotifyConnected: true };
    case types.SUBSCRIBE_ON_NOTIFICATIONS_SUCCESS:
      return { ...state, data: action.payload };
    case types.SOCKET_CONNECT_ERROR:
    case types.SUBSCRIBE_ON_NOTIFICATIONS_ERROR:
      return { ...state, errors: action.payload };
    // case types.CLEAR_STORE_ERRORS:
    //   return { ...state, errors: [] };
    // case types.CLEAR_EXTRA:
    //   return { ...state, extra: '' };
    default:
      return state;
  }
}
