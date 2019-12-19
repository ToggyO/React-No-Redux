import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

export const SidebarTeamsProjectsHeadline = ({ isSidebarOpened, isOpen, color, teamName }) => (
  <>
    <div
      className={`${s.circle} ${
        !isSidebarOpened ? s.align_center : ''
      } flex justify-content-center align-items-center`}
      style={{ backgroundColor: color }}
    >
      <span className={`${s.team_name}`}>
        {teamName
          .replace(/ /g, '')
          .slice(0, 1)
          .toUpperCase()}
      </span>
    </div>
    {isSidebarOpened && (
      <div className={`${s.headline} ml-2 flex justify-content-space-between align-items-center relative`}>
        <p className={`${s.headline_text} ${isOpen ? s.white_text : ''}`}>
          {teamName.replace(/(^\s*)|(\s*)$/g, '')}
        </p>
      </div>
    )}
  </>
);

SidebarTeamsProjectsHeadline.propTypes = {
  isSidebarOpened: PT.bool,
  isOpen: PT.bool,
  color: PT.string,
  teamName: PT.string,
};
