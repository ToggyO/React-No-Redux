import { connect } from 'react-redux';

import UserProfileAvatarView from './UserProfileAvatarView';

import { modalActions } from '@ducks/modal';
import * as userSelectors from '@ducks/user/selectors';

const mapStateToProps = state => ({
  modalLoading: userSelectors.userModalLoaderSelector(state),
});

const mapDispatchToProps = dispatch => ({
  modalOpen(itemKey, options) {
    dispatch(modalActions.modalOpen(itemKey, options));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileAvatarView);
