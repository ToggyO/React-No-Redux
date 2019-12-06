export const API_URL = {
  AUTH: {
    SIGNUP_WITH_EMAIL: 'signup/admin/email',
    SIGNUP_WITH_GOOGLE: 'signup/admin/google',
    REFRESH_TOKEN: 'auth/token',
    LOGIN_WITH_EMAIL: 'auth/token',
    LOGIN_WITH_GOOGLE: 'auth/token/google',
    CONFIRM_EMAIL: 'signup/confirm',
    SEND_NEW_CODE: 'signup/send-new-code',
    SET_USER_NAME: 'signup/username',
    SET_COMPANY_NAME: 'signup/company',
    SET_TEAM: 'signup/team',
    GET_TEAM_EMAILS: 'signup/team/invites',
    SET_FIRST_PROJECT: 'signup/project',
    REGISTRATION_DONE: 'signup/done',
    RESTORE_PASSWORD: 'users/passwords/request',
    SET_PASSWORD_INVITE: 'signup/member/email',
    SET_NEW_PASSWORD: 'users/passwords/set',
    VALIDATE_LINK_CODE: 'users/passwords/validate',
  },
  USER: {
    GET_TEAMS_OF_USER: '/users/current/teams',
  },
};
