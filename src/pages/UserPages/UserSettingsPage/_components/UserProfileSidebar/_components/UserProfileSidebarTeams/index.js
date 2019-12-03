import React from 'react';
import PT from 'prop-types';

import style from './style.module.sass';

import s from '@components/SidebarWrapper/_components/SidebarTeamsProject/_components/SidebarTeamsProjectsHeadline/style.module.sass';

export const UserProfileSidebarTeamsView = ({ color, teamName }) => (
  <div className={`${style.container} pl-10 pt-4 pb-4`}>
    <div
      className={`${style.circle} flex justify-content-center align-items-center`}
      style={{ backgroundColor: color }}
    >
      <span className={`${style.team_name}`}>
        {teamName
          .replace(/ /g, '')
          .slice(0, 1)
          .toUpperCase()}
      </span>
    </div>
    <div className={`${s.headline} ml-3 flex justify-content-space-between align-items-center relative`}>
      <p className={style.headline_text}>{teamName.replace(/(^\s*)|(\s*)$/g, '')}</p>
    </div>
  </div>
);

UserProfileSidebarTeamsView.propTypes = {
  color: PT.string,
  teamName: PT.string,
};
