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
    modalOpen(itemKey) {
      dispatch(modalActions.modalOpen(itemKey));
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
