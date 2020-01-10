import React from 'react';

import s from './style.module.sass';

import { ModalBorderColorBlock, ModalFontColorBlock } from '@components/StyledComponents/ColorBlocks';
import { UserTeamsListOfUsersItem } from '@components/Modal/_components/UserSettings/_components/UserTabs/UserTeams/_components/UserTeamsListOfUsersItem';

// eslint-disable-next-line no-unused-vars,react/prop-types
export const UserTeamsLIstOfUsersView = ({ users = [] }) => (
  <div className={s.container}>
    <ModalBorderColorBlock className={s.headlines}>
      <ModalFontColorBlock className={`${s.name} ${s.text} full_width`}>Name</ModalFontColorBlock>
      <ModalFontColorBlock className={`${s.email} ${s.text} full_width`}>Email address</ModalFontColorBlock>
      <ModalFontColorBlock className={`${s.last_active} ${s.text} full_width`}>Last active</ModalFontColorBlock>
      <ModalFontColorBlock className={`${s.actions} ${s.text} full_width`}>Actions</ModalFontColorBlock>
    </ModalBorderColorBlock>
    <ModalBorderColorBlock>
      <UserTeamsListOfUsersItem />
      <UserTeamsListOfUsersItem />
      <UserTeamsListOfUsersItem />
      <UserTeamsListOfUsersItem />
      <UserTeamsListOfUsersItem />
      <UserTeamsListOfUsersItem />
      {/* {users.map(item => <UserTeamsListOfUsersItem key/>)} */}
    </ModalBorderColorBlock>
  </div>
);
