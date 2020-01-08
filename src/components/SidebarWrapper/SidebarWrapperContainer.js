import { connect } from 'react-redux';

import SidebarWrapper from './SidebarWrapper';

import { modalActions } from '@ducks/modal';
import { socketActions, socketSelectors } from '@ducks/sockets';
import { sidebarSelectors, sidebarActions } from '@ducks/sidebar';
import * as userActions from '@ducks/user/actions';
import * as userSelectors from '@ducks/user/selectors';

const mapStateToProps = state => ({
  userProjects: userSelectors.userProjectsSelector(state),
  projectsLoaded: userSelectors.userProjectsLoaderSelector(state),
  userTeams: userSelectors.userTeamsSelector(state),
  teamsLoaded: userSelectors.userTeamsLoaderSelector(state),
  isNotifyConnected: socketSelectors.isNotificationsConnectedSelector(state),
  currentTeam: sidebarSelectors.currentTeamSelector(state),
  sidebarLoading: sidebarSelectors.sidebarLoaderSelector(state),
});

const mapDispatchToProps = dispatch => ({
  modalOpen(key, options) {
    dispatch(modalActions.modalOpen(key, options));
  },
  socketConnect(url) {
    dispatch(socketActions.socketConnect(url));
  },
  subscribeOnNotificationsChannel(...args) {
    dispatch(socketActions.subscribeOnNotificationsChannel(...args));
  },
  fetchUserData(...args) {
    dispatch(userActions.fetchUserData(...args));
  },
  changeCurrentTeam(currentTeam) {
    dispatch(sidebarActions.changeCurrentTeam(currentTeam));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarWrapper);
