import React, { useRef, useState } from 'react';
import PT from 'prop-types';

import { NavButtons } from '../NavButtons';

import s from './style.module.sass';

import { SidebarTeamsProjectsBoard } from '@components/SidebarWrapper/_components/SidebarTeamsProject/_components/SidebarTeamsProjectsBoard';
import { FolderHeadline } from '@components/SidebarWrapper/_components/SidebarTeamsProject/_components/SidebarTeamsProjectsFolder/_components/FolderHeadline';
import { DropdownSettingsButton } from '@components/Form/Dropdown/SidebarProjectSettings/_components/DropdownSettingsButton';

export const SidebarTeamsProjectsFolder = ({
  folderName = '   Folder',
  boardName = '     Board',
  addContainerClass = '',
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
        iconName="edit-project-statuses"
        title="Edit folder sharing"
        onClick={() => closeTooltipOnClick()}
      />
      <DropdownSettingsButton
        iconName="delete-project"
        title="Delete projects"
        onClick={() => closeTooltipOnClick()}
      />
    </>
  );

  return (
    <div
      className={`${s.container} relative ${addContainerClass}`}
      onMouseOver={() => toggleShowSettings(true)}
      onFocus={() => toggleShowSettings(true)}
      onMouseOut={() => toggleShowSettings(false)}
      onBlur={() => toggleShowSettings(false)}
    >
      <div className="flex">
        <div className={`${s.headline} flex`} onClick={() => toggleOpen(!isOpen)}>
          <FolderHeadline folderName={folderName} isOpen={isOpen} addContainerClass="flex" />
        </div>
        <NavButtons
          isOpen={isOpen}
          showSettings={showSettings}
          addSettingsIconClass="btn mr-3 mt-0 mb-0"
          addCreateButtonClass="btn mr-0 mt-0 mb-0"
          settingsTooltip={{
            placement: 'bottom-end',
            tooltip: renderProjectSettings(),
            trigger: 'click',
            innerRef: teamTooltipRef,
            containerClass: 'sidebarProjectsSettingsTooltipContainer',
            arrowClass: 'sidebarProjectsSettingsTooltipArrow',
          }}
        />
      </div>
      <div className={`${s.boards_container} ${isOpen ? s.shown : s.hidden}`}>
        <div className={`${s.boards_content} ml-6`}>
          <SidebarTeamsProjectsBoard boardName={boardName} addContainerClass="flex pt-2 pb-2" />
          {/* <SidebarTeamsProjectsBoard boardName={boardName} addContainerClass="flex pt-2 pb-2" /> */}
          {/* <SidebarTeamsProjectsBoard boardName={boardName} addContainerClass="flex pt-2 pb-2" /> */}
          {/* <SidebarTeamsProjectsBoard boardName={boardName} addContainerClass="flex pt-2 pb-2" /> */}
        </div>
      </div>
      {!isOpen && <div className={s.overlay} onClick={() => toggleOpen(!isOpen)} />}
    </div>
  );
};

SidebarTeamsProjectsFolder.propTypes = {
  folderName: PT.string,
  boardName: PT.string,
  addContainerClass: PT.string,
};
