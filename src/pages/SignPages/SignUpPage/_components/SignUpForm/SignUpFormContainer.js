import { connect } from 'react-redux';

import SignUpFormView from './SignUpFormView';

import { authActions, authSelectors } from '@ducks/auth';

function mapStateToProps(state) {
  return {
    errorsFromBackend: authSelectors.errorsSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signUpWithEmailRequest(emailObj) {
      dispatch(authActions.signUpWithEmailRequest(emailObj));
    },
    signUpWithGoogleRequest(emailObj) {
      dispatch(authActions.signUpWithGoogleRequest(emailObj));
    },
    clearStoreErrors() {
      dispatch(authActions.clearStoreErrors());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpFormView);
