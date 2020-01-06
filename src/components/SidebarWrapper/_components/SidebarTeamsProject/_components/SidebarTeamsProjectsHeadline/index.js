import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { SecondaryColorHeadlineFlagged } from '@components/StyledComponents/ColorBlocks';

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
        <SecondaryColorHeadlineFlagged className={`${s.headline_text}`} flag={isOpen}>
          {teamName.replace(/(^\s*)|(\s*)$/g, '')}
        </SecondaryColorHeadlineFlagged>
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
