import { connect } from 'react-redux';

import UserProfileAvatarView from './UserProfileAvatarView';

import { modalActions } from '@ducks/modal';
import { globalActions } from '@ducks/global';
import * as userSelectors from '@ducks/user/selectors';
import * as userActions from '@ducks/user/actions';

const mapStateToProps = state => ({
  avatarLoading: userSelectors.userAvatarLoaderSelector(state),
});

const mapDispatchToProps = dispatch => ({
  modalOpen(itemKey, options) {
    dispatch(modalActions.modalOpen(itemKey, options));
  },
  showGlobalError(message) {
    dispatch(globalActions.showGlobalError(message));
  },
  userLoaderStart() {
    dispatch(userActions.userLoaderStart());
  },
  userLoaderStop() {
    dispatch(userActions.userLoaderStop());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileAvatarView);
