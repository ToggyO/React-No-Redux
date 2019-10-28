import { connect } from 'react-redux';

import Modal from './Modal';

import { modalActions } from '@ducks/modal';

function mapStateToProps(state) {
  return {
    modalState: state.modal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    modalClose() {
      dispatch(modalActions.modalClose());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
