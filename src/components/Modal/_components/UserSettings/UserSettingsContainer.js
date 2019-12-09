import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import { compose } from 'redux';

import UserSettings from './UserSettings';

import * as userActions from '@ducks/user/actions';
import * as userSelectors from '@ducks/user/selectors';
import { modalActions } from '@ducks/modal';

const mapStateToProps = state => ({
  // userCompanies: userSelectors.userCompaniesSelector(state),
  // companiesLoader: userSelectors.userCompaniesLoaderSelector(state),
  loading: userSelectors.loaderSelector(state),
  userData: userSelectors.userDataSelector(state),
  userDataLoader: userSelectors.userDataLoaderSelector(state),
  userTeams: userSelectors.userTeamsSelector(state),
  teamsLoader: userSelectors.userTeamsLoaderSelector(state),
  isUserUpdating: userSelectors.userSpinnerSelector(state),
});

const mapDispatchToProps = dispatch => ({
  fetchUserData(...args) {
    dispatch(userActions.fetchUserData(...args));
  },
  updateUserData(name) {
    dispatch(userActions.updateUserData(name));
  },
  modalOpen(itemKey) {
    dispatch(modalActions.modalClose(itemKey));
  },
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)(UserSettings);
