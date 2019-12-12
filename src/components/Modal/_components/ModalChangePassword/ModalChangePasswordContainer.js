import { connect } from 'react-redux';

import ModalChangePasswordView from './ModalChangePasswordView';

import * as userSelectors from '@ducks/user/selectors';
import * as userActions from '@ducks/user/actions';

function mapStateToProps(state) {
  return {
    errorsFromBackend: userSelectors.errorsSelector(state),
    modalLoading: userSelectors.userModalLoaderSelector(state),
  };
}

const mapDispatchToProps = dispatch => ({
  changeUserPassword(data) {
    dispatch(userActions.changeUserPassword(data));
  },
  clearUserErrors() {
    dispatch(userActions.clearUserErrors());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalChangePasswordView);
