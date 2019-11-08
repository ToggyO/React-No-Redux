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
//     clearExtra(emailObj) {
//       dispatch(authActions.clearExtra(emailObj));
//     },
//   };
// }

export default connect(
  mapStateToProps,
  null
)(RestorePasswordView);
