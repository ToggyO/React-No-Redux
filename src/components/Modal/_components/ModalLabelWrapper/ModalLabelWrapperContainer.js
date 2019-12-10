import { connect } from 'react-redux';

import { ModalLabelWrapper } from './index';

import * as userSelectors from '@ducks/user/selectors';

function mapStateToProps(state) {
  return {
    modalLoading: userSelectors.userModalLoaderSelector(state),
  };
}

export default connect(
  mapStateToProps,
  null
)(ModalLabelWrapper);
