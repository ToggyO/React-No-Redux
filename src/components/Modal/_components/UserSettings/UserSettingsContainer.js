import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import { compose } from 'redux';

import UserSettings from './UserSettings';

import { userActions, userSelectors } from '@ducks/user';

const mapStateToProps = state => ({
  userCompanies: userSelectors.userCompaniesSelector(state),
  userData: userSelectors.userDataSelector(state),
  loading: userSelectors.userLoaderSelector(state),
});

const mapDispatchToProps = dispatch => ({
  fetchUserData(...args) {
    dispatch(userActions.fetchUserData(...args));
  },
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)(UserSettings);
