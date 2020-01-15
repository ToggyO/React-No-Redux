import * as types from './types';

const initialState = {
  data: {
    user: {},
    userLoaded: false,
    teams: [],
    teamsLoaded: false,
    teamsDeleting: false,
    companies: [],
    companiesLoaded: false,
    projects: [],
    projectsLoaded: false,
  },
  spinner: false,
  loading: false,
  modalLoading: false,
  avatarLoading: false,
  errors: [],
  extra: '',
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_USER_DATA_REQUEST:
    case types.USER_PRELOADER_START:
    case types.GET_LIST_OF_TEAM_USERS_REQUEST:
      return { ...state, loading: true };
    case types.UPDATE_USER_DATA_REQUEST:
    case types.UPDATE_SINGLE_USER_TEAM_REQUEST:
      return { ...state, spinner: true };
    case types.CHANGE_USER_EMAIL_REQUEST:
    case types.CONFIRM_NEW_USER_EMAIL_REQUEST:
    case types.SEND_NEW_CODE_TO_CHANGE_EMAIL_REQUEST:
    case types.CHANGE_USER_PASSWORD_REQUEST:
      return { ...state, modalLoading: true };
    case types.AVATAR_PRELOADER_START:
    case types.DELETE_USER_AVATAR_REQUEST:
      return { ...state, avatarLoading: true };
    case types.CHANGE_USER_AVATAR_REQUEST:
      return { ...state, modalLoading: true, avatarLoading: true };
    case types.DELETE_TEAM_REQUEST:
      return {
        ...state,
        loading: true,
        data: {
          ...state.data,
          teamsDeleting: true,
        },
      };
    case types.FETCH_USER_DATA_SUCCESS:
    case types.CHANGE_UI_THEME_SUCCESS: {
      const { data, dataType } = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          [dataType]: data,
          [`${dataType}Loaded`]: true,
        },
        loading: false,
      };
    }
    case types.UPDATE_USER_DATA_SUCCESS:
    case types.CONFIRM_NEW_USER_EMAIL_SUCCESS:
    case types.CHANGE_USER_AVATAR_SUCCESS:
    case types.DELETE_USER_AVATAR_SUCCESS:
      return {
        ...state,
        spinner: false,
        modalLoading: false,
        avatarLoading: false,
        data: {
          ...state.data,
          user: action.payload,
        },
      };
    case types.UPDATE_USER_PROJECTS_LIST_SUCCESS: {
      const { data = {}, changesType } = action.payload;
      const { items } = data;
      const filteredProjects = state.data.projects.items.filter(
        item => item.projectId !== items[0].projectId
      );
      filteredProjects.unshift(items[0]);
      return {
        ...state,
        data: {
          ...state.data,
          projects: {
            ...state.data.projects,
            total: state.data.projects.total + changesType,
            items: filteredProjects,
          },
        },
      };
    }
    // console.log(`${dataType.substring(0, dataType.length - 1)}Id`);
    case types.CUT_USER_PROJECT_FROM_LIST:
    case types.DELETE_TEAM_SUCCESS: {
      const { dataType, id } = action.payload;
      const filteredData = state.data[dataType].items.filter(
        item => item[`${dataType.substring(0, dataType.length - 1)}Id`] !== id
      );
      return {
        ...state,
        data: {
          ...state.data,
          teamsDeleting: false,
          [dataType]: {
            ...state.data[dataType],
            total: state.data[dataType].total - 1,
            items: filteredData,
          },
        },
        loading: false,
      };
    }
    // case types.CUT_USER_PROJECT_FROM_LIST: {
    //   const projectId = action.payload;
    //   const filteredProjects = state.data.projects.items.filter(item => item.projectId !== projectId);
    //   return {
    //     ...state,
    //     data: {
    //       ...state.data,
    //       projects: {
    //         ...state.data.projects,
    //         total: state.data.projects.total - 1,
    //         items: filteredProjects,
    //       },
    //     },
    //   };
    // }
    case types.UPDATE_SINGLE_USER_TEAM_SUCCESS: {
      const { data } = action.payload;
      const findTeamById = state.data.teams.items.filter(item => item.teamId === data.id);
      // eslint-disable-next-line no-param-reassign,no-return-assign
      findTeamById.reduce(accumulator => (accumulator.team = data), findTeamById[0]);
      return {
        ...state,
        spinner: false,
        data: {
          ...state.data,
          teams: {
            ...state.data.teams,
            items: [...state.data.teams.items],
          },
        },
      };
    }
    case types.USER_PRELOADER_STOP:
      return { ...state, loading: false };
    case types.SEND_NEW_CODE_TO_CHANGE_EMAIL_SUCCESS:
    case types.CHANGE_USER_PASSWORD_SUCCESS:
      return { ...state, modalLoading: false };
    case types.CHANGE_USER_EMAIL_SUCCESS:
    case types.GET_LIST_OF_TEAM_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        spinner: false,
        modalLoading: false,
        avatarLoading: false,
        extra: action.payload,
      };
    }
    case types.AVATAR_PRELOADER_STOP:
      return { ...state, avatarLoading: false };
    case types.FETCH_USER_DATA_ERROR:
    case types.UPDATE_USER_DATA_ERROR:
    case types.CHANGE_USER_EMAIL_ERROR:
    case types.CONFIRM_NEW_USER_EMAIL_ERROR:
    case types.SEND_NEW_CODE_TO_CHANGE_EMAIL_ERROR:
    case types.CHANGE_USER_PASSWORD_ERROR:
    case types.CHANGE_USER_AVATAR_ERROR:
    case types.DELETE_USER_AVATAR_ERROR:
    case types.UPDATE_USER_PROJECTS_LIST_ERROR:
    case types.CHANGE_UI_THEME_ERROR:
    case types.UPDATE_SINGLE_USER_TEAM_ERROR:
    case types.GET_LIST_OF_TEAM_USERS_ERROR:
    case types.DELETE_TEAM_ERROR:
      return {
        ...state,
        loading: false,
        spinner: false,
        modalLoading: false,
        avatarLoading: false,
        errors: action.payload,
      };
    case types.CLEAR_USER_ERRORS:
      return { ...state, errors: [] };
    case types.CLEAR_USER_EXTRA:
      return { ...state, extra: '' };
    default:
      return state;
  }
}
