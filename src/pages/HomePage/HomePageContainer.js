import { connect } from 'react-redux';

import HomePageView from './HomePageView';

import { modalActions } from '@ducks/modal';

function mapDispatchToProps(dispatch) {
  return {
    modalOpen(modalKey, options) {
      dispatch(modalActions.modalOpen(modalKey, options));
    },
  };
}

export default connect(
  null,
  mapDispatchToProps
)(HomePageView);
