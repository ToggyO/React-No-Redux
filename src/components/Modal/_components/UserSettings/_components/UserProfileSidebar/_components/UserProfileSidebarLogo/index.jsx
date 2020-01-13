import React from 'react';

import s from './style.module.sass';

import { Icon } from '@components/Icon';
import { ModalFontPrimaryColorBlock } from '@components/StyledComponents/ColorBlocks';


export const UserProfileSidebarLogoView = () => (
  <>
    <div className={s.icon_container}>
      <Icon iconName="logo_small" className={s.icon}/>
    </div>
    <ModalFontPrimaryColorBlock className={s.headline}>
      <h1>Settings</h1>
    </ModalFontPrimaryColorBlock>
  </>
);
