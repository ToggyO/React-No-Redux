import React from 'react';
import PT from 'prop-types';

import s from '../UserTeamsLIstOfUsers/style.module.sass';

import { ModalBorderColorBlock, ModalFontPrimaryColorBlock } from '@components/StyledComponents/ColorBlocks';
import { Icon } from '@components/Icon';
import { AvatarContainer } from '@components/AvatarContainer';

// TODO change default values
// eslint-disable-next-line react/prop-types
export const UserTeamsListOfUsersItem = ({ userData: { user }, style }) => (
  <div className={s.container}>
    <ModalBorderColorBlock className={`${s.headlines} pb-2 pt-2`}>
      <div className={`${s.name} full_width flex`}>
        <AvatarContainer user={user} style={style} />
        <ModalFontPrimaryColorBlock className={s.text_user}>{user.name || 'User'}</ModalFontPrimaryColorBlock>
      </div>
      <ModalFontPrimaryColorBlock className={`${s.email} ${s.text_user} full_width`}>
        {user.email}
      </ModalFontPrimaryColorBlock>
      <ModalFontPrimaryColorBlock className={`${s.last_active} ${s.text_user} full_width`}>
        02.28.1488
      </ModalFontPrimaryColorBlock>
      <button type="button" className={`${s.actions} btn full_width mt-0 mb-0`}>
        <Icon iconName="settings_switch_primary" />
      </button>
    </ModalBorderColorBlock>
  </div>
);

UserTeamsListOfUsersItem.propTypes = {
  userData: PT.object,
};
