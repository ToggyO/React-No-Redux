import { connect } from 'react-redux';

import { ModalChangeEmail } from './index';

import * as userSelectors from '@ducks/user/selectors';
import * as userActions from '@ducks/user/actions';

function mapStateToProps(state) {
  return {
    errorsFromBackend: userSelectors.errorsSelector(state),
    modalLoading: userSelectors.userModalLoaderSelector(state),
  };
}

const mapDispatchToProps = dispatch => ({
  changeUserEmailRequest(data) {
    dispatch(userActions.changeUserEmailRequest(data));
  },
  clearUserErrors() {
    dispatch(userActions.clearUserErrors());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalChangeEmail);