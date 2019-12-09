import * as types from './types';

export const fetchUserData = (dataType, page, pageSize) => ({
  type: types.FETCH_USER_DATA_REQUEST,
  payload: {
    dataType,
    page,
    pageSize,
  },
});

export const updateUserData = name => ({
  type: types.UPDATE_USER_DATA_REQUEST,
  payload: name,
});
