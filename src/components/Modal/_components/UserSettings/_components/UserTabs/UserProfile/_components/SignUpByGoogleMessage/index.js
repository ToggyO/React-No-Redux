import React from 'react';

import s from './style.module.sass';

import { Icon } from '@components/Icon';
import { ModalFontPrimaryColorBlock } from '@components/StyledComponents/ColorBlocks';

export const SignUpByGoogleMessage = () => (
  <div className={s.container}>
    <div className={`${s.icon_container} mr-3`}>
      <Icon iconName="google-logo" className={s.icon} />
    </div>
    <ModalFontPrimaryColorBlock className={s.text}>
      You were registered via Google account
    </ModalFontPrimaryColorBlock>
  </div>
);
