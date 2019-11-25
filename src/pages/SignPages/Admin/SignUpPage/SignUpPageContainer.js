import { connect } from 'react-redux';

import SignUpPageView from './SignUpPageView';

// import { authSelectors } from '@ducks/auth';

// function mapStateToProps(state) {
//   return { loading: authSelectors.loadingSelector(state) };
// }

export default connect(
  null,
  null
)(SignUpPageView);
