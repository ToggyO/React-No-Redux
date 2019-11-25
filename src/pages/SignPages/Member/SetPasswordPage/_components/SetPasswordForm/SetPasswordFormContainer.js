import { connect } from 'react-redux';

import SetPasswordFormView from './SetPasswordFormView';

import { authActions, authSelectors } from '@ducks/auth';

function mapStateToProps(state) {
  return {
    errorsFromBackend: authSelectors.errorsSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setPasswordInvite(data) {
      dispatch(authActions.setPasswordInvite(data));
    },
    clearStoreErrors() {
      dispatch(authActions.clearStoreErrors());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetPasswordFormView);
