import superaxios from '@services/superaxios';

import { API_URL } from '@config';

export default {
  auth: {
    signUpWithEmail: async emailObj => {
      const response = await superaxios.post(API_URL.SIGNUP_WITH_EMAIL, emailObj);
      return response.data;
    },
    signUpWithGoogle: async token => {
      const response = await superaxios.post(API_URL.SIGNUP_WITH_GOOGLE, token);
      return response.data;
    },
    loginWithEmail: async emailObj => {
      const response = await superaxios.post(API_URL.LOGIN_WITH_EMAIL, emailObj);
      return response.data;
    },
    loginWithGoogle: async token => {
      const response = await superaxios.post(API_URL.LOGIN_WITH_GOOGLE, token);
      return response.data;
    },
    confirmEmail: async code => {
      const response = await superaxios.put(API_URL.CONFIRM_EMAIL, code);
      return response.data;
    },
    sendNewCode: async email => {
      const response = await superaxios.post(API_URL.SEND_NEW_CODE, email);
      return response.data;
    },
    setUserName: async name => {
      const response = await superaxios.put(API_URL.SET_USER_NAME, name);
      return response.data;
    },
    setCompanyName: async name => {
      const response = await superaxios.post(API_URL.SET_COMPANY_NAME, name);
      return response.data;
    },
    setTeam: async data => {
      const response = await superaxios.post(API_URL.SET_TEAM, data);
      return response.data;
    },
    setFirstProject: async data => {
      const response = await superaxios.post(API_URL.SET_FIRST_PROJECT, data);
      return response.data;
    },
    registrationDone: async () => {
      const response = await superaxios.put(API_URL.REGISTRATION_DONE);
      return response.data;
    },
    restorePassword: async data => {
      const response = await superaxios.post(API_URL.RESTORE_PASSWORD, data);
      return response.data;
    },
    setPasswordInvite: async data => {
      const response = await superaxios.post(API_URL.SET_PASSWORD_INVITE, data);
      return response.data;
    },
    setNewPassword: async data => {
      const response = await superaxios.put(API_URL.SET_NEW_PASSWORD, data);
      return response.data;
    },
  },
  other: {
    getTeamEmails: async () => {
      const response = await superaxios.get(API_URL.GET_TEAM_EMAILS);
      return response.data;
    },
  },
};
