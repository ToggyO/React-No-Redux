import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';
import { style as avatarStyle } from './avatar_style';

import { ModalBorderColorBlock, ModalFontPrimaryColorBlock } from '@components/StyledComponents/ColorBlocks';
import { UserTeamsListOfUsersItem } from '@components/Modal/_components/UserSettings/_components/UserTabs/UserTeams/_components/UserTeamsListOfUsersItem';
import { UserTeamsListOfUsersItemPlaceholder } from '@components/Modal/_components/UserSettings/_components/UserTabs/UserTeams/_components/UserTeamsListOfUsersItemPlaceholder';
import { getUniqueKey } from '@utils/index';

const teamUsersPlaceholder = [...Array(4)];

export const UserTeamsLIstOfUsersView = ({ teamsUsers }) => (
  <div className={s.container}>
    <ModalBorderColorBlock className={`${s.headlines} pb-3 pt-8`}>
      <ModalFontPrimaryColorBlock className={`${s.name} ${s.text} full_width`}>Name</ModalFontPrimaryColorBlock>
      <ModalFontPrimaryColorBlock className={`${s.email} ${s.text} full_width`}>Email address</ModalFontPrimaryColorBlock>
      <ModalFontPrimaryColorBlock className={`${s.last_active} ${s.text} full_width`}>Last active</ModalFontPrimaryColorBlock>
      <ModalFontPrimaryColorBlock className={`${s.actions} ${s.text} full_width`}>Actions</ModalFontPrimaryColorBlock>
    </ModalBorderColorBlock>
    <ModalBorderColorBlock>
      {!teamsUsers
        ? teamUsersPlaceholder.map(() => <UserTeamsListOfUsersItemPlaceholder key={getUniqueKey()}/>)
        : teamsUsers.map(item => <UserTeamsListOfUsersItem key={item.userId} style={avatarStyle} userData={item}/>)}
    </ModalBorderColorBlock>
  </div>
);

UserTeamsLIstOfUsersView.propTypes = {
  teamsUsers: PT.arrayOf(PT.object),
}
