import { connect } from 'react-redux';

import ConfirmEmailPageView from './ConfirmEmailPageView';

import { authSelectors } from '@ducks/auth';

function mapStateToProps(state) {
  return {
    userInfo: authSelectors.userInfoSelector(state),
  };
}

export default connect(
  mapStateToProps,
  null
)(ConfirmEmailPageView);
