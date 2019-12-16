import { connect } from 'react-redux';

import SidebarWrapper from './SidebarWrapper';

import { modalActions } from '@ducks/modal';
import { sidebarActions } from '@ducks/sidebar';

// const mapStateToProps = state => ({
//   modal: modalSelectors.modalKeySelector(state),
// });

const mapDispatchToProps = dispatch => ({
  modalOpen(key) {
    dispatch(modalActions.modalOpen(key));
  },
  socketConnectTest() {
    dispatch(sidebarActions.socketConnectTest());
  },
});

export default connect(
  null,
  mapDispatchToProps
)(SidebarWrapper);
