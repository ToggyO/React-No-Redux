import { connect } from 'react-redux';

import FirstProjectFormView from './FirstProjectFormView';

import { authSelectors, authActions } from '@ducks/auth';

function mapStateToProps(state) {
  return {
    loading: authSelectors.loadingSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setFirstProjectRequest(data) {
      dispatch(authActions.setFirstProjectRequest(data));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstProjectFormView);
