import { connect } from 'react-redux';

import SidebarWrapper from './SidebarWrapper';

import { modalActions } from '@ducks/modal';
import { socketActions } from '@ducks/sockets';
import * as userActions from '@ducks/user/actions';
import * as userSelectors from '@ducks/user/selectors';

const mapStateToProps = state => ({
  userProjects: userSelectors.userProjectsSelector(state),
});

const mapDispatchToProps = dispatch => ({
  modalOpen(key) {
    dispatch(modalActions.modalOpen(key));
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarWrapper);
