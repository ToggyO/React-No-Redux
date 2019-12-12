import { connect } from 'react-redux';

import UserProfileAvatarView from './UserProfileAvatarView';

import { modalActions } from '@ducks/modal';

// const mapStateToProps = state => ({
//   // userCompanies: userSelectors.userCompaniesSelector(state),
//   // companiesLoader: userSelectors.userCompaniesLoaderSelector(state),
//   loading: userSelectors.loaderSelector(state),
//   userData: userSelectors.userDataSelector(state),
//   userDataLoader: userSelectors.userDataLoaderSelector(state),
//   userTeams: userSelectors.userTeamsSelector(state),
//   teamsLoader: userSelectors.userTeamsLoaderSelector(state),
//   isUserUpdating: userSelectors.userSpinnerSelector(state),
// });

const mapDispatchToProps = dispatch => ({
  modalOpen(itemKey, options) {
    dispatch(modalActions.modalOpen(itemKey, options));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(UserProfileAvatarView);
