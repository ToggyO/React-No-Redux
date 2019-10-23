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
    confirmUserName: async user => {
      const response = await superaxios.put(API_URL.CONFIRM_USER_NAME, user);
      return response.data;
    },
  },
};
