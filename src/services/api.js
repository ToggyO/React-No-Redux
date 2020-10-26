import history from '@services/history';

export default {
  auth: {
    logOut: async () => {
      try {
        await fetch('/auth/logout', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        history.push('/login');
      } catch (error) {
        console.log(error);
      }
    },
  },
  user: {},
  other: {},
};
