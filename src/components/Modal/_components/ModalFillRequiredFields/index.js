import React from 'react';
import PT from 'prop-types';

import s from '../ModalChangePasswordSuccess/style.module.sass';

import { ModalBaseColorBlock, ModalFontColorBlock } from '@components/StyledComponents/ColorBlocks';

export const ModalFillRequiredFields = ({ onClose, itemKey }) => (
  <ModalBaseColorBlock className={s.container}>
    <ModalFontColorBlock className={`${s.text} pb-6 text-align-center`}>
      Please enter required fields
    </ModalFontColorBlock>
    <div className={s.button_block}>
      <button
        type="button"
        className="btn green-filled rounded full_width pt-4 pb-4 mb-0"
        onClick={() => onClose(itemKey)}
      >
        Ok
      </button>
    </div>
  </ModalBaseColorBlock>
);

ModalFillRequiredFields.propTypes = {
  onClose: PT.func,
  itemKey: PT.string,
};
