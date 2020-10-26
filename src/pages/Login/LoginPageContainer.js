import { _globalSelectors, authSelectors } from '@ducks/store';
import { connect } from '@ducks/storeHelpers';

import LoginPageView from './LoginPageView';

const mapStateToProps = state => ({
  globalLoading: _globalSelectors.globalLoaderSelector(state),
  authInfo: authSelectors.authInfoSelector(state),
});

// const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, null)(LoginPageView);
