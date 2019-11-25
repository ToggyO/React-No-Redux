import { connect } from 'react-redux';

import EnterNameFormView from './EnterNameFormView';

import { authActions, authSelectors } from '@ducks/auth';

function mapStateToProps(state) {
  return {
    errorsFromBackend: authSelectors.errorsSelector(state),
    userRole: authSelectors.userRoleSelector(state),
  };
}

const mapDispatchToProps = dispatch => ({
  setUserName(name) {
    dispatch(authActions.setUserName(name));
  },
  setUserNameInvite(data) {
    dispatch(authActions.setUserNameInvite(data));
  },
  clearStoreErrors() {
    dispatch(authActions.clearStoreErrors());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnterNameFormView);
