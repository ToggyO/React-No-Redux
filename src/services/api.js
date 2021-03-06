import superaxios from '@services/superaxios';

import { API_URL } from '@config';
// import { makeRequestString } from '@utils/index';

export default {
  auth: {
    signUpWithEmail: async emailObj => {
      const response = await superaxios.post(API_URL.AUTH.SIGNUP_WITH_EMAIL, emailObj);
      return response.data;
    },
    signUpWithGoogle: async token => {
      const response = await superaxios.post(API_URL.AUTH.SIGNUP_WITH_GOOGLE, token);
      return response.data;
    },
    loginWithEmail: async emailObj => {
      const response = await superaxios.post(API_URL.AUTH.LOGIN_WITH_EMAIL, emailObj);
      return response.data;
    },
    loginWithGoogle: async token => {
      const response = await superaxios.post(API_URL.AUTH.LOGIN_WITH_GOOGLE, token);
      return response.data;
    },
    confirmEmail: async code => {
      const response = await superaxios.put(API_URL.AUTH.CONFIRM_EMAIL, code);
      return response.data;
    },
    sendNewCode: async email => {
      const response = await superaxios.post(API_URL.AUTH.SEND_NEW_CODE, email);
      return response.data;
    },
    setUserName: async name => {
      const response = await superaxios.put(API_URL.AUTH.SET_USER_NAME, name);
      return response.data;
    },
    setCompanyName: async name => {
      const response = await superaxios.post(API_URL.AUTH.SET_COMPANY_NAME, name);
      return response.data;
    },
    setTeam: async data => {
      const response = await superaxios.post(API_URL.AUTH.SET_TEAM, data);
      return response.data;
    },
    setFirstProject: async data => {
      const response = await superaxios.post(API_URL.AUTH.SET_FIRST_PROJECT, data);
      return response.data;
    },
    registrationDone: async () => {
      const response = await superaxios.put(API_URL.AUTH.REGISTRATION_DONE);
      return response.data;
    },
    restorePassword: async data => {
      const response = await superaxios.post(API_URL.AUTH.RESTORE_PASSWORD, data);
      return response.data;
    },
    setPasswordInvite: async data => {
      const response = await superaxios.post(API_URL.AUTH.SET_PASSWORD_INVITE, data);
      return response.data;
    },
    setNewPassword: async data => {
      const response = await superaxios.put(API_URL.AUTH.SET_NEW_PASSWORD, data);
      return response.data;
    },
  },
  user: {
    fetchUserData: async ({ dataType, ...rest }) => {
      const URL = `${API_URL.USER.FETCH_USER_DATA}/${dataType || ''}`;
      const response = await superaxios.get(URL, {
        params: {
          Page: rest.page || '',
          PageSize: rest.pageSize || '',
          companyId: rest.companyId || '',
          teamId: rest.teamId || '',
          projectId: rest.projectId || '',
        },
      });
      return response.data;
    },
    // fetchUserData: async ({ dataType, ...rest }) => {
    //   const URL = `${API_URL.USER.FETCH_USER_DATA}/${dataType || ''}${makeRequestString(rest)}`;
    //   const response = await superaxios.get(URL);
    //   return response.data;
    // },
    updateUserData: async data => {
      const response = await superaxios.put(API_URL.USER.UPDATE_USER_DATA, data);
      return response.data;
    },
    changeUserEmailRequest: async data => {
      const response = await superaxios.post(API_URL.USER.CHANGE_USER_EMAIL, data);
      return response.data;
    },
    confirmNewUserEmail: async code => {
      const response = await superaxios.put(API_URL.USER.CONFIRM_USER_EMAIL, code);
      return response.data;
    },
    sendNewCodeToChangeEmail: async data => {
      const response = await superaxios.post(API_URL.USER.SEND_NEW_CODE, data);
      return response.data;
    },
    changeUserPassword: async data => {
      const response = await superaxios.put(API_URL.USER.CHANGE_USER_PASSWORD, data);
      return response.data;
    },
    changeUserAvatar: async data => {
      const response = await superaxios.post(API_URL.USER.CHANGE_USER_AVATAR, data);
      return response.data;
    },
    deleteUserAvatar: async () => {
      const response = await superaxios.delete(API_URL.USER.DELETE_USER_AVATAR);
      return response.data;
    },
    changeUiTheme: async theme => {
      const response = await superaxios.put(`${API_URL.USER.CHANGE_UI_THEME}/${theme}`);
      return response.data;
    },
    updateSingleUserTeam: async data => {
      const { teamId, ...rest } = data;
      const response = await superaxios.put(`${API_URL.TEAMS.ROOT}/${teamId}`, rest);
      return response.data;
    },
    getListOfTeamUsers: async ({ teamId, ...rest }) => {
      const response = await superaxios.get(`${API_URL.TEAMS.ROOT}/${teamId}${API_URL.TEAMS.USERS}`, {
        params: {
          Page: rest.page || '',
          PageSize: rest.pageSize || '',
        },
      });
      return response.data;
    },
  },
  other: {
    getTeamEmails: async () => {
      const response = await superaxios.get(API_URL.AUTH.GET_TEAM_EMAILS);
      return response.data;
    },
  },
};
