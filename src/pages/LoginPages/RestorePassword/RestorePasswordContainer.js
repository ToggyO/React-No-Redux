import { connect } from 'react-redux';

import RestorePasswordView from './RestorePasswordView';

import { authSelectors } from '@ducks/auth';

function mapStateToProps(state) {
  return {
    withExtra: authSelectors.extraSelector(state),
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
)(RestorePasswordView);
