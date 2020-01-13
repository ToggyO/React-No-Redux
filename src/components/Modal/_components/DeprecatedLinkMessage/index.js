import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';
import { ModalBaseColorBlock, ModalFontPrimaryColorBlock } from '@components/StyledComponents/ColorBlocks';

export const DeprecatedLinkMessage = ({ onClose, itemKey }) => (
  <ModalBaseColorBlock className={s.wrapper}>
    <div className={`${s.message} pt-4 pb-4`}>
      <ModalFontPrimaryColorBlock className={`${s.article} pb-2 pt-2`}>
        Link is deprecated!
      </ModalFontPrimaryColorBlock>
      <ModalFontPrimaryColorBlock className={s.text}>
        Please, sign in with your new password.
      </ModalFontPrimaryColorBlock>
    </div>
    <div className={`${s.close} pt-4 pr-4`} onClick={() => onClose(itemKey)}>
      <button type="button" className="btn">
        <Icon iconName="close-modal" />
      </button>
    </div>
  </ModalBaseColorBlock>
);

DeprecatedLinkMessage.propTypes = {
  onClose: PT.func,
  itemKey: PT.string,
};
