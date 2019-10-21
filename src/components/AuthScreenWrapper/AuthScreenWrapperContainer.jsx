import { connect } from 'react-redux';

import AuthScreenWrapper from './AuthScreenWrapper';

import { authSelectors } from '@ducks/auth';

function mapStateToProps(state) {
  return { loading: authSelectors.loadingSelector(state) };
}

export default connect(mapStateToProps)(AuthScreenWrapper);
