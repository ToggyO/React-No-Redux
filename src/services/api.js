import superaxios from '@services/superaxios';

import { API_URL } from '@config';

export default {
  auth: {
    signUpWithEmail: async emailObj => {
      const response = await superaxios.post(API_URL.SIGNUP_WITH_EMAIL, emailObj);
      return response.data;
    },
  },
};
