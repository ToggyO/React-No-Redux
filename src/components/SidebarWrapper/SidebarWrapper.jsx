/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PT from 'prop-types';

import s from './style.module.sass';
import { style as LinkButtonStyle } from './link_button_style';

import { Icon } from '@components/Icon';
import { LinkButton } from '@components/SidebarWrapper/_components/LinkButton';
import { TeamsButtons } from '@components/SidebarWrapper/_components/TeamsButtons';
import { SidebarTeamsProject } from '@components/SidebarWrapper/_components/SidebarTeamsProject';
import CustomScrollbar from '@components/Scrollbar';
import { LOCAL_STORAGE_KEYS } from '@config';
import { API_URL } from '@config/apiUrl';
import { SOCKET_METHODS } from '@config/socketMethods';
import { getFromState } from '@utils/index';


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

// .withUrl('?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl9pZCI6IjJiZTBiYzIxOTM3MzRmY2E4YWNmZTkzYTJkYTFjYzllIiwidXNlcl9pZCI6ImNhOTdiYTM2MzVlODQ0ZWY4NDc3NGZlMDYyM2E3YmFiIiwicm9sZV9pZCI6ImJmMjJhM2ZkZjdlYjQ4NzFiODRhNGQ4ZmY1MWQwZjdkIiwiZXhwIjoxNTc2MjQxNDQ4LCJpc3MiOiJTcXVhZCIsImF1ZCI6IklPIn0.M9Cved1ZSwMbL9muu95vgBq6q2UpfpFrtknJ2RNDOn4')

const SidebarWrapper = ({
  children,
  modalOpen,
  fetchUserData,
  userProjects = [],
  ...rest
}) => {
  const [isSidebarOpened, toggleSidebarOpen] = useState(true);

  const connectAndSubscribe = async () => {
    rest.socketConnect(API_URL.SOCKET.NOTIFICATIONS);
    setTimeout(() => rest.subscribeOnNotificationsChannel(
      SOCKET_METHODS.SUBSCRIBE.SIDEBAR_SUBSCRIBE_TEAM,
      SOCKET_METHODS.BROADCAST.SIDEBAR_BROADCAST, {
        TeamId: '3307dec8-99d0-46c4-9935-4421230d6599',
        Token: getFromState(LOCAL_STORAGE_KEYS.ACCESS_TOKEN),
      }), 3000);
  };

  useEffect(() => {
    fetchUserData('projects', 1, 9999);
    connectAndSubscribe();
  },[]);

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
        <div
          className={`${s.links} ${isSidebarOpened ? s.links_horizontal : s.links_vertical} flex justify-content-center align-items-center flex-wrap-wrap`}>
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
          thumbStyleVertical={{
            backgroundColor: '#6D768A',
            width: 4,
            borderRadius: 2,
          }}
        >
          {userProjects.map(item => <SidebarTeamsProject
            key={item.projectId}
            userProject={item}
            isSidebarOpened={isSidebarOpened}
          />)}
        </CustomScrollbar>
        <div className={`${s.footer}`}>
          <TeamsButtons isOpen={isSidebarOpened} modalOpen={modalOpen}/>
        </div>
      </div>
      <div className={s.children}>{children}</div>
    </div>
  );
};

SidebarWrapper.propTypes = {
  modalOpen: PT.func,
  fetchUserData: PT.func,
  userProjects: PT.arrayOf(PT.object),
  // modal: PT.arrayOf(PT.string),
};

export default SidebarWrapper;
