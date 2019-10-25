import { connect } from 'react-redux';

import EnterNameFormView from './EnterNameFormView';

import { authActions, authSelectors } from '@ducks/auth';

function mapStateToProps(state) {
  return {
    errorsFromBackend: authSelectors.errorsSelector(state),
  };
}

const mapDispatchToProps = dispatch => ({
  setUserName(name) {
    dispatch(authActions.setUserName(name));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnterNameFormView);
