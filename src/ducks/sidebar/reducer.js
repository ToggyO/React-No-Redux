import * as types from './types';

import { LOCAL_STORAGE_KEYS } from '@config/common';
import { getFromLocalState } from '@services/ls';
import { getFromSessionState } from '@services/ss';

const initialState = {
  data: {},
  loading: true,
  currentTeam:
    getFromLocalState(LOCAL_STORAGE_KEYS.SIDEBAR_CURRENT_TEAM) ||
    getFromSessionState(LOCAL_STORAGE_KEYS.SIDEBAR_CURRENT_TEAM) ||
    {},
  sidebarState:
    getFromLocalState(LOCAL_STORAGE_KEYS.SIDEBAR_STATE) ||
    getFromSessionState(LOCAL_STORAGE_KEYS.SIDEBAR_STATE),
  errors: [],
  extra: '',
};

export default function sidebar(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_CURRENT_TEAM:
      return { ...state, currentTeam: action.payload };
    case types.SIDEBAR_PRELOADER_START:
      return { ...state, loading: true };
    case types.SIDEBAR_PRELOADER_STOP:
      return { ...state, loading: false };
    // case types.CLEAR_USER_ERRORS:
    //   return { ...state, errors: [] };
    // case types.CLEAR_USER_EXTRA:
    //   return { ...state, extra: '' };
    default:
      return state;
  }
}
