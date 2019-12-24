import React from 'react';

import style from '../style.module.sass';

import s from '@components/SidebarWrapper/_components/SidebarTeamsProject/_components/SidebarTeamsProjectsHeadline/style.module.sass';

export const UserTeamsPlaceholder = () => (
  <div className={`${style.container} pl-10 pt-4 pb-4 flex`}>
    <div
      className={`${style.square_placeholder} flex justify-content-center align-items-center`}
      style={{ backgroundColor: 'lightgray' }}
    />
    <div
      className={`${s.team_placeholder} ml-3 flex justify-content-space-between align-items-center relative`}
    />
  </div>
);
