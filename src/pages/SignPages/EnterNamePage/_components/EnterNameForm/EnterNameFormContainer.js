import { connect } from 'react-redux';

import EnterNameFormView from './EnterNameFormView';

import { authActions } from '@ducks/auth';

const mapDispatchToProps = dispatch => ({
  confirmUserName(name) {
    dispatch(authActions.confirmUserName(name));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(EnterNameFormView);
