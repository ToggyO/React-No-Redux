import { connect } from 'react-redux';

import SetPasswordFormView from './SetPasswordFormView';

import { authSelectors } from '@ducks/auth';

function mapStateToProps(state) {
  return {
    errorsFromBackend: authSelectors.errorsSelector(state),
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     signUpWithEmailRequest(emailObj) {
//       dispatch(authActions.signUpWithEmailRequest(emailObj));
//     },
//     signUpWithGoogleRequest(emailObj) {
//       dispatch(authActions.signUpWithGoogleRequest(emailObj));
//     },
//   };
// }

export default connect(
  mapStateToProps,
  null
)(SetPasswordFormView);
