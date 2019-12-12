import { connect } from 'react-redux';

import ModalCropperPreview from './ModalCropperPreview';

import * as userActions from '@ducks/user/actions';

const mapDispatchToProps = dispatch => ({
  changeUserAvatar(data) {
    dispatch(userActions.changeUserAvatar(data));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(ModalCropperPreview);
