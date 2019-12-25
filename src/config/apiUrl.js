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
    RESTORE_PASSWORD: 'users/settings/password/request',
    SET_PASSWORD_INVITE: 'signup/member/email',
    SET_NEW_PASSWORD: 'users/settings/password/reset',
    VALIDATE_LINK_CODE: 'users/settings/password/validate',
  },
  USER: {
    FETCH_USER_DATA: '/users/current',
    UPDATE_USER_DATA: 'users/settings',
    CHANGE_USER_EMAIL: 'users/settings/email/request',
    CONFIRM_USER_EMAIL: 'users/settings/email/set',
    SEND_NEW_CODE: 'users/settings/email/send-new-request',
    CHANGE_USER_PASSWORD: 'users/settings/password/set',
    CHANGE_USER_AVATAR: '/users/settings/avatar-from-body',
  },
  PROJECTS: {
    ROOT: '/projects',
  },
  SOCKET: {
    NOTIFICATIONS: '/ws',
    CHAT: '/ws/chatAPI',
  },
};
// export const API_URL = {
//   AUTH: {
//     SIGNUP_WITH_EMAIL: 'signup/admin/email',
//     SIGNUP_WITH_GOOGLE: 'signup/admin/google',
//     REFRESH_TOKEN: 'auth/token',
//     LOGIN_WITH_EMAIL: 'auth/token',
//     LOGIN_WITH_GOOGLE: 'auth/token/google',
//     CONFIRM_EMAIL: 'signup/confirm',
//     SEND_NEW_CODE: 'signup/send-new-code',
//     SET_USER_NAME: 'signup/username',
//     SET_COMPANY_NAME: 'signup/company',
//     SET_TEAM: 'signup/team',
//     GET_TEAM_EMAILS: 'signup/team/invites',
//     SET_FIRST_PROJECT: 'signup/project',
//     REGISTRATION_DONE: 'signup/done',
//     RESTORE_PASSWORD: 'users/passwords/request',
//     SET_PASSWORD_INVITE: 'signup/member/email',
//     SET_NEW_PASSWORD: 'users/passwords/set',
//     VALIDATE_LINK_CODE: 'users/passwords/validate',
//   },
//   USER: {
//     FETCH_USER_DATA: '/users/current',
//     CHANGE_USER_EMAIL: '/users/email/request',
//     CONFIRM_USER_EMAIL: '/users/email/set',
//     SEND_NEW_CODE: '/users/email/send-new-request',
//     CHANGE_USER_PASSWORD: '/users/passwords/change',
//     CHANGE_USER_AVATAR: '/users/avatar-from-body',
//   },
//   PROJECTS: {
//     ROOT: '/projects',
//   },
//   SOCKET: {
//     NOTIFICATIONS: '/ws',
//     CHAT: '/ws/chatAPI',
//   },
// };
