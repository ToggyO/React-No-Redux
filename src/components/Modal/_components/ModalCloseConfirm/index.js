import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import {
  ModalBaseColorBlock,
  ModalFontPrimaryColorBlock,
  PrimaryColorBlock,
} from '@components/StyledComponents/ColorBlocks';

const ModalCloseConfirm = ({ onClose, itemKey, isConfirmModalOpen, zIndex, onCloseConfirmModal }) => (
  <>
    <PrimaryColorBlock
      className={`${s.overlay} ${isConfirmModalOpen ? s.overlay_shown : ''}`}
      style={{ zIndex: isConfirmModalOpen ? 1002 + zIndex : -1 }}
    />
    <ModalBaseColorBlock
      className={`${s.wrapper} ${isConfirmModalOpen ? s.wrapper_shown : ''}`}
      style={{ zIndex: isConfirmModalOpen ? 1003 + zIndex : -1 }}
    >
      <div className={`${s.message} pb-4`}>
        <ModalFontPrimaryColorBlock className={`${s.text} text-align-center`}>
          Close window?
        </ModalFontPrimaryColorBlock>
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
    </ModalBaseColorBlock>
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
