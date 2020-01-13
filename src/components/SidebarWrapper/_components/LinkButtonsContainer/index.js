import React, { useState, useRef } from 'react';
import PT from 'prop-types';

// eslint-disable-next-line import/no-unresolved
import { Tooltip } from '@components/ReactTooltip/bin';

import { style as teamsStyle } from './teams_style';

import s from '@components/Form/Dropdown/SidebarProjectSettings/_components/DropdownSettingsButton/style.module.sass';
import { LinkButton } from '@components/SidebarWrapper/_components/LinkButton';
import { style as LinkButtonStyle } from '@components/SidebarWrapper/link_button_style';
import { UserProfileSidebarTeamsView } from '@components/Modal/_components/UserSettings/_components/UserProfileSidebar/_components/UserProfileSidebarTeams';
import { writeToLocalState } from '@services/ls';
import { checkLocalStorage } from '@utils/index';
import { LOCAL_STORAGE_KEYS, MODAL_KEYS, USER_COMMON } from '@config/common';
import { writeToSessionState } from '@services/ss';
import CustomScrollbar from '@components/Scrollbar';

const buttons = [
  {
    link: '#',
    iconName: 'sidebar-inbox',
    title: 'Inbox',
  },
  {
    link: '#',
    iconName: 'sidebar-tasks',
    title: 'Tasks',
  },
  {
    link: '#',
    iconName: 'sidebar-settings',
    title: 'Teams',
  },
];

export const LinkButtonsContainer = ({
  userTeams = [],
  currentTeam,
  changeCurrentTeam,
  isSidebarOpened,
  modalOpen,
}) => {
  const [flag, toggleFlag] = useState(false);
  const teamTooltipRef = useRef(null);

  const changeTeam = teamId => {
    changeCurrentTeam(teamId);
    if (checkLocalStorage()) {
      return writeToLocalState(LOCAL_STORAGE_KEYS.SIDEBAR_CURRENT_TEAM, teamId);
    }
    return writeToSessionState(LOCAL_STORAGE_KEYS.SIDEBAR_CURRENT_TEAM, teamId);
  };

  const renderTeamsList = () => (
    <>
      <CustomScrollbar
        style={{ width: 162, borderRadius: 3 }}
        universal
        autoHeight
        autoHeightMax={323}
        thumbStyleVertical={{
          backgroundColor: '#6D768A',
          width: 4,
          borderRadius: 2,
        }}
      >
        {userTeams.map(item => (
          <UserProfileSidebarTeamsView
            key={item.team.name}
            color={item.team.colorHex}
            teamName={item.team.name}
            addClassContainer="pl-2 pt-2 pb-2"
            addClassCircle="flex justify-content-center align-items-center"
            addClassHeadline="ml-3 flex justify-content-space-between align-items-center relative"
            style={teamsStyle}
            onClick={() => {
              changeTeam(item.teamId);
              teamTooltipRef.current.hideTooltip();
            }}
          />
        ))}
        <button
          type="button"
          className={`${s.delete_button} btn mt-0 mb-0`}
          onClick={() => {
            modalOpen(MODAL_KEYS.USER_SETTINGS, {
              userProfileTab: USER_COMMON.USER_SETTINGS_TABS.TEAMS,
              checkedTeamFromSidebar: currentTeam,
            });
            teamTooltipRef.current.hideTooltip();
          }}
        >
          <p className={s.delete_title}>Manage teams</p>
        </button>
      </CustomScrollbar>
    </>
  );

  return (
    <>
      <LinkButton info={buttons[0]} style={LinkButtonStyle} />
      <LinkButton info={buttons[1]} style={LinkButtonStyle} />
      <Tooltip
        placement={isSidebarOpened ? 'bottom-end' : 'right-start'}
        tooltip={renderTeamsList()}
        trigger="click"
        innerRef={teamTooltipRef}
        containerClass="sidebarProjectsSettingsTooltipContainer sidebarLinkButtonsTooltipContainer"
        arrowClass="sidebarProjectsSettingsTooltipArrow"
        onVisibilityChange={() => toggleFlag(!flag)}
      >
        <LinkButton info={buttons[2]} style={LinkButtonStyle} flag={flag} />
      </Tooltip>
    </>
  );
};

LinkButtonsContainer.propTypes = {
  userTeams: PT.arrayOf(PT.object),
  currentTeam: PT.string,
  changeCurrentTeam: PT.func,
  isSidebarOpened: PT.bool,
  modalOpen: PT.func,
};
