import React from 'react';

import s from '../UserTeamsLIstOfUsers/style.module.sass';

import { ModalBorderColorBlock, ModalFontColorBlock } from '@components/StyledComponents/ColorBlocks';
import { Icon } from '@components/Icon';

// eslint-disable-next-line react/prop-types
export const UserTeamsListOfUsersItem = ({ user = {} }) => (
  <div className={s.container}>
    <ModalBorderColorBlock className={s.headlines}>
      <ModalFontColorBlock className={`${s.name} ${s.text_user} full_width`}>
        {user.name || 'John'}
      </ModalFontColorBlock>
      <ModalFontColorBlock className={`${s.email} ${s.text_user} full_width`}>
        {user.email || 'test@mail.com'}
      </ModalFontColorBlock>
      <ModalFontColorBlock className={`${s.last_active} ${s.text_user} full_width`}>
        02.28.1488
      </ModalFontColorBlock>
      <Icon iconName="settings" />
    </ModalBorderColorBlock>
  </div>
);
