import { connect } from 'react-redux';

import ConfirmEmailPageView from './ConfirmEmailPageView';

import { authActions, authSelectors } from '@ducks/auth';

function mapStateToProps(state) {
  return {
    userInfo: authSelectors.userInfoSelector(state),
    withExtra: authSelectors.extraSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sendNewCode(email) {
      dispatch(authActions.sendNewCode(email));
    },
    clearExtra() {
      dispatch(authActions.clearExtra());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmEmailPageView);
