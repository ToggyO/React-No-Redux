import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

export const SidebarTeamsProjectsHeadline = ({ color, teamName }) => (
  <>
    <div
      className={`${s.circle} flex justify-content-center align-items-center`}
      style={{ backgroundColor: color }}
    >
      <span className={s.team_name}>
        {teamName
          .replace(/ /g, '')
          .slice(0, 1)
          .toUpperCase()}
      </span>
    </div>
    <div className={`${s.headline} ml-2 flex justify-content-space-between align-items-center relative`}>
      <p className={`${s.headline_text} `}>{teamName.replace(/(^\s*)|(\s*)$/g, '')}</p>
    </div>
  </>
);

SidebarTeamsProjectsHeadline.propTypes = {
  color: PT.string,
  teamName: PT.string,
};
