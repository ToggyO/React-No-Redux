import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';
import { ModalBaseColorBlock, ModalFontPrimaryColorBlock } from '@components/StyledComponents/ColorBlocks';



const Handler500 = ({ onClose, itemKey }) => (
  <ModalBaseColorBlock className={s.wrapper}>
    <div className={`${s.message} pt-4 pb-4`}>
      <ModalFontPrimaryColorBlock className={`${s.article} pb-2 pt-2`}>Error</ModalFontPrimaryColorBlock>
      <ModalFontPrimaryColorBlock className={`${s.text} pb-2 pt-2`}>Something went wrong.</ModalFontPrimaryColorBlock>
    </div>
    <div className={s.button} onClick={() => onClose(itemKey)}>
      <button type="button" className="btn green full_width rounded p-4">Retry</button>
    </div>
    <div className={`${s.close} pt-4 pr-4`}  onClick={() => onClose(itemKey)}>
      <button type="button" className="btn">
        <Icon iconName="close-modal"/>
      </button>
    </div>
  </ModalBaseColorBlock>
);

Handler500.propTypes = {
  onClose: PT.func,
  itemKey: PT.string,
};

export default Handler500;
