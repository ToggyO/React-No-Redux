import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import { compose } from 'redux';

import UserSettings from './UserSettings';

import * as userActions from '@ducks/user/actions';
import * as userSelectors from '@ducks/user/selectors';

const mapStateToProps = state => ({
  // userCompanies: userSelectors.userCompaniesSelector(state),
  // companiesLoader: userSelectors.userCompaniesLoaderSelector(state),
  userTeams: userSelectors.userTeamsSelector(state),
  teamsLoader: userSelectors.userTeamsLoaderSelector(state),
  userData: userSelectors.userDataSelector(state),
  userDataLoader: userSelectors.userDataLoaderSelector(state),
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
