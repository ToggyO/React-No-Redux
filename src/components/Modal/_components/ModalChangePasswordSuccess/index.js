import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';
import { ModalBaseColorBlock, ModalFontPrimaryColorBlock } from '@components/StyledComponents/ColorBlocks';

export const ModalChangePasswordSuccess = ({ onClose, itemKey }) => (
  <ModalBaseColorBlock className={s.container}>
    <div className={`${s.icon_container} flex justify-content-center align-items-center mb-5`}>
      <Icon iconName="accept" className={s.icon} />
    </div>
    <ModalFontPrimaryColorBlock className={`${s.text} pb-6 text-align-center`}>
      Password is updated
    </ModalFontPrimaryColorBlock>
    <div className={s.button_block}>
      <button
        type="button"
        className="btn green-filled rounded full_width pt-4 pb-4 mb-0"
        onClick={() => onClose(itemKey)}
      >
        Close
      </button>
    </div>
  </ModalBaseColorBlock>
);

ModalChangePasswordSuccess.propTypes = {
  onClose: PT.func,
  itemKey: PT.string,
};
