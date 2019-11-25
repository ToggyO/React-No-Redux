/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import s from './style.module.sass';
import { style as LinkButtonStyle } from './link_button_style';

import { Icon } from '@components/Icon';
import { LinkButton } from '@components/SidebarWrapper/_components/LinkButton';
import { TeamsButtons } from '@components/SidebarWrapper/_components/TeamsButtons';
import { SidebarTeamsProject } from '@components/SidebarWrapper/_components/SidebarTeamsProject';
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
    title: 'Settings',
  },
];


const SidebarWrapper = ({
  children,
}) => {
  const [ isSidebarOpened, toggleSidebarOpen ] = useState(true);

  return (
    <div className={`${s.wrapper} flex`}>
      <div className={`${s.sidebar} ${isSidebarOpened ? s.sidebar_shown : ''} flex flex-column`}>
        <div className={`${s.logo_container} flex justify-content-center align-items-center`}>
          <div className={`${s.logo} ${isSidebarOpened ? s.logo_large : s.logo_small}`}>
            <Icon iconName="squad-logo" className={s.image}/>
          </div>
          <button
            type="button"
            className={`${s.toggle_button}`}
            onClick={() => toggleSidebarOpen(!isSidebarOpened)}
          >
            <Icon iconName="arrow-right" className={!isSidebarOpened ? 'rotate-180' : ''}/>
          </button>
        </div>
        <div className={`${s.links} ${isSidebarOpened ? s.links_horizontal : s.links_vertical} flex justify-content-center align-items-center flex-wrap-wrap`}>
          <LinkButton
            info={buttons}
            style={LinkButtonStyle}
          />
        </div>
        <CustomScrollbar
          style={{ flexGrow: 1 }}
          universal
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          thumbStyleVertical={{ backgroundColor: '#6D768A',
            width: 4,
            borderRadius: 2,
          }}
        >
          <SidebarTeamsProject isSidebarOpened={isSidebarOpened}/>
          <SidebarTeamsProject isSidebarOpened={isSidebarOpened}/>
          <SidebarTeamsProject isSidebarOpened={isSidebarOpened}/>
          <SidebarTeamsProject isSidebarOpened={isSidebarOpened}/>
          <SidebarTeamsProject isSidebarOpened={isSidebarOpened}/>
        </CustomScrollbar>
        <div className={`${s.footer}`}>
          <TeamsButtons isOpen={isSidebarOpened}/>
        </div>
      </div>
      <div className={s.children}>{children}</div>
    </div>
  )
};

export default SidebarWrapper;
