import { connect } from 'react-redux';

import SidebarWrapper from './SidebarWrapper';

import { modalActions } from '@ducks/modal';

// const mapStateToProps = state => ({
//   modal: modalSelectors.modalKeySelector(state),
// });

const mapDispatchToProps = dispatch => ({
  modalOpen(key) {
    dispatch(modalActions.modalOpen(key));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(SidebarWrapper);
