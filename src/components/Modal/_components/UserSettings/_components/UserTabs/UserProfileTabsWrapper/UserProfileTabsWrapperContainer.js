import { connect } from 'react-redux';

import UserProfileTabsWrapperView from './UserProfileTabsWrapperView';

import { modalActions } from '@ducks/modal';

const mapDispatchToProps = dispatch => ({
  modalClose(itemKey) {
    dispatch(modalActions.modalClose(itemKey));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(UserProfileTabsWrapperView);
