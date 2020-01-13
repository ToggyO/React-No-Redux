import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';

import s from './style.module.sass';

import { modalActions } from '@ducks/modal';
import { MODAL_KEYS } from '@config/common';

const OverlayBlocker = ({ modalOpen, zIndex }) => (
  <div
    className={s.overlay}
    onClick={() => modalOpen(MODAL_KEYS.MODAL_FILL_REQUIRED_FIELDS)}
    style={{ zIndex }}
  />
);

OverlayBlocker.propTypes = {
  modalOpen: PT.func,
  zIndex: PT.number,
};

const mapDispatchToProps = dispatch => ({
  modalOpen(itemKey, options) {
    dispatch(modalActions.modalOpen(itemKey, options));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(OverlayBlocker);
