import React from 'react';
import { connect } from 'react-redux';

import ConfirmEmailFormView from './ConfirmEmailFormView';

import { authActions, authSelectors } from '@ducks/auth';

const ConfirmEmailFormContainer = props => <ConfirmEmailFormView {...props} />;

function mapStateToProps(state) {
  return {
    errorsFromBackend: authSelectors.errorsSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    confirmEmail(code) {
      dispatch(authActions.confirmEmail(code));
    },
    clearStoreErrors() {
      dispatch(authActions.clearStoreErrors());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmEmailFormContainer);
