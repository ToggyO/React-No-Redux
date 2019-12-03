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
    modalClose(itemKey) {
      dispatch(modalActions.modalClose(itemKey));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
