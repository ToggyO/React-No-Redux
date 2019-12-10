import { connect } from 'react-redux';

import ModalConfirmEmailChangeView from './ModalConfirmEmailChangeView';

import * as userSelectors from '@ducks/user/selectors';
import * as userActions from '@ducks/user/actions';

function mapStateToProps(state) {
  return {
    errorsFromBackend: userSelectors.errorsSelector(state),
    modalLoading: userSelectors.userModalLoaderSelector(state),
  };
}

const mapDispatchToProps = dispatch => ({
  confirmNewUserEmail(code) {
    dispatch(userActions.confirmNewUserEmail(code));
  },
  clearUserErrors() {
    dispatch(userActions.clearUserErrors());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalConfirmEmailChangeView);
