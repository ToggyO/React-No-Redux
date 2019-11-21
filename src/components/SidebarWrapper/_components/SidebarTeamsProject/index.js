import React, { useState, useRef } from 'react';
import PT from 'prop-types';

import s from './style.module.sass';
import { SwitchVisibilityProjectButton } from './_components/SwitchVisibilityProjectButton';
import { SidebarTeamsProjectsFolder } from './_components/SidebarTeamsProjectsFolder';

import { NavButtons } from '@components/SidebarWrapper/_components/SidebarTeamsProject/_components/NavButtons';

export const SidebarTeamsProject = ({ color = 'orange', teamName = '   Project' }) => {
  const [isOpen, toggleOpen] = useState(false);
  const [showSettings, toggleShowSettings] = useState(false);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  return (
    <div className={s.wrapper}>
      <div className={`${s.container} relative`}>
        <div
          className={`${s.logo} flex justify-content-center align-items-center relative`}
          onMouseOver={() => toggleShowSettings(true)}
          onFocus={() => toggleShowSettings(true)}
          onMouseOut={() => toggleShowSettings(false)}
          onBlur={() => toggleShowSettings(false)}
        >
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
          <div
            className={`${s.headline} ml-2 flex justify-content-space-between align-items-center relative`}
          >
            <p className={`${s.headline_text} `}>{teamName.replace(/(^\s*)|(\s*)$/g, '')}</p>
            <NavButtons isOpen={isOpen} showSettings={showSettings} />
          </div>
          <div className={`${s.switch_buttons} flex align-items-center`}>
            <SwitchVisibilityProjectButton
              // setWidthProperty={setWidthProperty}
              toggleOpen={toggleOpen}
              isOpen={isOpen}
              containerRef={containerRef}
              contentRef={contentRef}
            />
          </div>
        </div>
        <div ref={containerRef} className={`${s.info}`}>
          <div ref={contentRef}>
            <SidebarTeamsProjectsFolder />
            {/* <div className={s.test}>YEP!</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

SidebarTeamsProject.propTypes = {
  color: PT.string,
  teamName: PT.string,
};
