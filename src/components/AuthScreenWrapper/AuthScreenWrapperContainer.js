import { connect } from 'react-redux';

import AuthScreenWrapperView from './AuthScreenWrapperView';

import { authSelectors } from '@ducks/auth';

function mapStateToProps(state) {
  return { loading: authSelectors.loadingSelector(state) };
}

export default connect(mapStateToProps)(AuthScreenWrapperView);
