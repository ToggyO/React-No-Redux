import { connect } from 'react-redux';

import SetPasswordFormView from './SetNewPasswordFormView';

import { authSelectors, authActions } from '@ducks/auth';

function mapStateToProps(state) {
  return {
    errorsFromBackend: authSelectors.errorsSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setNewPassword(data) {
      dispatch(authActions.setNewPassword(data));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetPasswordFormView);