import React, { useEffect, useState } from 'react';

// eslint-disable-next-line import/no-unresolved
import { Tooltip } from '@components/ReactTooltip/bin';

import { LinkButton } from '@components/SidebarWrapper/_components/LinkButton';
import { style as LinkButtonStyle } from '@components/SidebarWrapper/link_button_style';

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

export const LinkButtonsContainer = () => {
  const [flag, toggleFlag] = useState(false);

  useEffect(() => console.log(flag), [flag]);

  const renderTeamsList = () => (
    <>
      <div>ListItem</div>
      <div>ListItem</div>
      <div>ListItem</div>
    </>
  );

  return (
    <>
      <LinkButton info={buttons[0]} style={LinkButtonStyle} />
      <LinkButton info={buttons[1]} style={LinkButtonStyle} />
      <Tooltip
        placement="bottom-end"
        tooltip={renderTeamsList()}
        trigger="click"
        containerClass="sidebarProjectsSettingsTooltipContainer"
        arrowClass="sidebarProjectsSettingsTooltipArrow"
        onVisibilityChange={() => toggleFlag(!flag)}
        // afterShow={() => toggleFlag(true)}
        // afterHide={() => toggleFlag(false)}
      >
        <LinkButton info={buttons[2]} style={LinkButtonStyle} />
      </Tooltip>
    </>
  );
};
