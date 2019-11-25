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
//     setTeam(data) {
//       dispatch(authActions.setTeam(data));
//     },
//     clearStoreErrors() {
//       dispatch(authActions.clearStoreErrors());
//     },
//   };
// }

export default connect(
  mapStateToProps,
  null
)(SetPasswordFormView);
