import React, { useRef, useState } from 'react';
import PT from 'prop-types';

import s from './style.module.sass';
import { SwitchVisibilityProjectButton } from './_components/SwitchVisibilityProjectButton';
import { SidebarTeamsProjectsFolder } from './_components/SidebarTeamsProjectsFolder';
import { SidebarTeamsProjectsHeadline } from './_components/SidebarTeamsProjectsHeadline';
import { NavButtons } from './_components/NavButtons';

import { DropdownSettingsButton } from '@components/Form/Dropdown/SidebarProjectSettings/_components/DropdownSettingsButton';

export const SidebarTeamsProject = ({
  isSidebarOpened,
  userProject: {
    project: { name = '', colorHex = '#82ABFB' },
  },
}) => {
  const [isOpen, toggleOpen] = useState(false);
  const [showSettings, toggleShowSettings] = useState(false);
  const teamTooltipRef = useRef(null);

  const closeTooltipOnClick = () => teamTooltipRef.current.hideTooltip();

  const renderProjectSettings = () => (
    <>
      <DropdownSettingsButton
        iconName="edit-project-settings"
        title="Edit project settings"
        onClick={() => closeTooltipOnClick()}
      />
      <DropdownSettingsButton
        iconName="edit-project-statuses"
        title="Edit project statuses"
        onClick={() => closeTooltipOnClick()}
      />
      <DropdownSettingsButton
        iconName="delete-project"
        title="Delete project"
        onClick={() => closeTooltipOnClick()}
      />
    </>
  );

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
            className={`${s.tittle_container} ${
              !isSidebarOpened ? s.float_left : ''
            } flex align-items-center relative`}
            onClick={() => toggleOpen(!isOpen)}
          >
            <SidebarTeamsProjectsHeadline
              isSidebarOpened={isSidebarOpened}
              isOpen={isOpen}
              color={colorHex}
              teamName={name}
            />
          </div>
          {isSidebarOpened && (
            <>
              <NavButtons
                isOpen={isOpen}
                showSettings={showSettings}
                addSettingsIconClass="btn mr-3"
                addCreateButtonClass="btn mr-3"
                // settingsWrapper={SidebarProjectSettings}
                settingsTooltip={{
                  placement: 'bottom-end',
                  tooltip: renderProjectSettings(),
                  trigger: 'click',
                  innerRef: teamTooltipRef,
                  containerClass: 'sidebarProjectsSettingsTooltipContainer',
                  arrowClass: 'sidebarProjectsSettingsTooltipArrow',
                }}
              />
              <div className={`${s.switch_buttons} flex align-items-center`}>
                <SwitchVisibilityProjectButton toggleOpen={toggleOpen} isOpen={isOpen} />
              </div>
            </>
          )}
        </div>
        <div className={`${s.info} ${isSidebarOpened && isOpen ? s.shown : s.hidden}`}>
          <div className={s.info_container}>
            <SidebarTeamsProjectsFolder addContainerClass="pt-2 pb-2" />
            <SidebarTeamsProjectsFolder addContainerClass="pt-2 pb-2" />
            <SidebarTeamsProjectsFolder addContainerClass="pt-2 pb-2" />
            <SidebarTeamsProjectsFolder addContainerClass="pt-2 pb-2" />
          </div>
        </div>
      </div>
      {isSidebarOpened && !isOpen && <div className={s.overlay} onClick={() => toggleOpen(!isOpen)} />}
    </div>
  );
};

SidebarTeamsProject.propTypes = {
  isSidebarOpened: PT.bool,
  userProject: PT.object,
  colorHex: PT.string,
  name: PT.string,
};
