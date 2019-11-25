import { connect } from 'react-redux';

import RestorePasswordFormView from './RestorePasswordFormView';

import { authActions, authSelectors } from '@ducks/auth';

function mapStateToProps(state) {
  return {
    errorsFromBackend: authSelectors.errorsSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    restorePassword(email) {
      dispatch(authActions.restorePassword(email));
    },
    clearExtra(emailObj) {
      dispatch(authActions.clearExtra(emailObj));
    },
    clearStoreErrors() {
      dispatch(authActions.clearStoreErrors());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestorePasswordFormView);
