import { connect } from 'react-redux';

import TutorialPageFormView from './TutorialPageFormView';

import { authActions, authSelectors } from '@ducks/auth';

function mapStateToProps(state) {
  return {
    errorsFromBackend: authSelectors.errorsSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    registrationDone() {
      dispatch(authActions.registrationDone());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TutorialPageFormView);
