import { connect } from 'react-redux';

import Modal from './Modal';

import { modalActions, modalSelectors } from '@ducks/modal';

function mapStateToProps(state) {
  return {
    modalState: modalSelectors.modalKeySelector(state),
    // modalState: state.modal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    modalOpen(itemKey, options) {
      dispatch(modalActions.modalOpen(itemKey, options));
    },
    modalClose(itemKey) {
      dispatch(modalActions.modalClose(itemKey));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
