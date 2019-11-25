import { connect } from 'react-redux';

import LoginPageFormView from './LoginPageFormView';

import { authActions, authSelectors } from '@ducks/auth';

function mapStateToProps(state) {
  return {
    errorsFromBackend: authSelectors.errorsSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginInWithEmailRequest(emailObj) {
      dispatch(authActions.loginInWithEmailRequest(emailObj));
    },
    loginInWithGoogleRequest(emailObj) {
      dispatch(authActions.loginInWithGoogleRequest(emailObj));
    },
    clearStoreErrors() {
      dispatch(authActions.clearStoreErrors());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPageFormView);
