import { connect } from 'react-redux';

import ModalConfirmEmailChangeView from './ModalConfirmEmailChangeView';

import * as userSelectors from '@ducks/user/selectors';
import * as userActions from '@ducks/user/actions';

function mapStateToProps(state) {
  return {
    errorsFromBackend: userSelectors.errorsSelector(state),
    modalLoading: userSelectors.userModalLoaderSelector(state),
    withExtra: userSelectors.userExtraSelector(state),
  };
}

const mapDispatchToProps = dispatch => ({
  confirmNewUserEmail(code) {
    dispatch(userActions.confirmNewUserEmail(code));
  },
  sendNewCodeToChangeEmail(data) {
    dispatch(userActions.sendNewCodeToChangeEmail(data));
  },
  clearUserErrors() {
    dispatch(userActions.clearUserErrors());
  },
  clearUserExtra() {
    dispatch(userActions.clearUserExtra());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalConfirmEmailChangeView);
