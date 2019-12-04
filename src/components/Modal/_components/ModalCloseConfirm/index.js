import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

const ModalCloseConfirm = ({ onClose, itemKey, isConfirmModalOpen, zIndex, onCloseConfirmModal }) => (
  <>
    <div
      className={`${s.overlay} ${isConfirmModalOpen ? s.overlay_shown : ''}`}
      style={{ zIndex: isConfirmModalOpen ? 1002 + zIndex : -1 }}
    />
    <div
      className={`${s.wrapper} ${isConfirmModalOpen ? s.wrapper_shown : ''}`}
      style={{ zIndex: isConfirmModalOpen ? 1003 + zIndex : -1 }}
    >
      <div className={`${s.message} pb-4`}>
        <p className="text-align-center">Close window?</p>
      </div>
      <div className={`${s.button} flex flex-column`}>
        <button
          type="button"
          className="btn green-filled full_width rounded p-4"
          onClick={() => {
            onClose(itemKey);
            onCloseConfirmModal();
          }}
        >
          Confirm
        </button>
        <button
          type="button"
          className="btn primary-outlined full_width rounded p-4"
          onClick={onCloseConfirmModal}
        >
          Cancel
        </button>
      </div>
    </div>
  </>
);

ModalCloseConfirm.propTypes = {
  onClose: PT.func,
  itemKey: PT.string,
  isConfirmModalOpen: PT.bool,
  zIndex: PT.number,
  onCloseConfirmModal: PT.func,
};

export default ModalCloseConfirm;
