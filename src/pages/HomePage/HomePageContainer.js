import { connect } from 'react-redux';

import HomePageView from './HomePageView';

import { modalActions } from '@ducks/modal';

function mapDispatchToProps(dispatch) {
  return {
    modalOpen(modalKey) {
      dispatch(modalActions.modalOpen(modalKey));
    },
  };
}

export default connect(
  null,
  mapDispatchToProps
)(HomePageView);
