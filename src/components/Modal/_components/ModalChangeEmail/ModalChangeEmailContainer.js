import { connect } from 'react-redux';

import { ModalChangeEmail } from './index';

import * as userSelectors from '@ducks/user/selectors';

function mapStateToProps(state) {
  return {
    errorsFromBackend: userSelectors.errorsSelector(state),
  };
}

export default connect(
  mapStateToProps,
  null
)(ModalChangeEmail);
