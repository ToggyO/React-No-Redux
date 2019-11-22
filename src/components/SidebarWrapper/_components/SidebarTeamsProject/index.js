import React, { useState } from 'react';
import PT from 'prop-types';

import s from './style.module.sass';
import { SwitchVisibilityProjectButton } from './_components/SwitchVisibilityProjectButton';
import { SidebarTeamsProjectsFolder } from './_components/SidebarTeamsProjectsFolder';
import { SidebarTeamsProjectsHeadline } from './_components/SidebarTeamsProjectsHeadline';
import { NavButtons } from './_components/NavButtons';

export const SidebarTeamsProject = ({ color = 'orange', teamName = '   Project' }) => {
  const [isOpen, toggleOpen] = useState(false);
  const [showSettings, toggleShowSettings] = useState(false);

  return (
    <div className={`${s.wrapper} relative`}>
      <div className={`${s.container} relative`}>
        <div
          className={`${s.logo} flex align-items-center relative`}
          onMouseOver={() => toggleShowSettings(true)}
          onFocus={() => toggleShowSettings(true)}
          onMouseOut={() => toggleShowSettings(false)}
          onBlur={() => toggleShowSettings(false)}
        >
          <div
            className={`${s.tittle_container} flex justify-content-center align-items-center relative`}
            onClick={() => toggleOpen(!isOpen)}
          >
            <SidebarTeamsProjectsHeadline color={color} teamName={teamName} />
          </div>
          <NavButtons
            isOpen={isOpen}
            showSettings={showSettings}
            addSettingsIconClass="btn mr-3"
            addCreateButtonClass="btn mr-3"
          />
          <div className={`${s.switch_buttons} flex align-items-center`}>
            <SwitchVisibilityProjectButton toggleOpen={toggleOpen} isOpen={isOpen} />
          </div>
        </div>
        <div className={`${s.info} ${isOpen ? s.shown : s.hidden}`}>
          <div className={s.info_container}>
            <SidebarTeamsProjectsFolder addContainerClass="pt-2 pb-2" />
            <SidebarTeamsProjectsFolder addContainerClass="pt-2 pb-2" />
            <SidebarTeamsProjectsFolder addContainerClass="pt-2 pb-2" />
            <SidebarTeamsProjectsFolder addContainerClass="pt-2 pb-2" />
          </div>
        </div>
      </div>
      {!isOpen && <div className={s.overlay} onClick={() => toggleOpen(!isOpen)} />}
    </div>
  );
};

SidebarTeamsProject.propTypes = {
  color: PT.string,
  teamName: PT.string,
};
