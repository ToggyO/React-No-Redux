import { connect } from 'react-redux';

import EnterNameFormView from './EnterNameFormView';

import { authActions } from '@ducks/auth';

const mapDispatchToProps = dispatch => ({
  setUserName(name) {
    dispatch(authActions.setUserName(name));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(EnterNameFormView);
