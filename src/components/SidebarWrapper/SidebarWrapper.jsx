/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PT from 'prop-types';

import s from './style.module.sass';
import { LinkButtonsContainer } from './_components/LinkButtonsContainer';

import { Icon } from '@components/Icon';
import { TeamsButtons } from '@components/SidebarWrapper/_components/TeamsButtons';
import { SidebarTeamsProject } from '@components/SidebarWrapper/_components/SidebarTeamsProject';
import CustomScrollbar from '@components/Scrollbar';
import { LOCAL_STORAGE_KEYS } from '@config';
import { API_URL } from '@config/apiUrl';
import { SOCKET_METHODS } from '@config/socketMethods';
import { getFromState, getUniqueKey } from '@utils/index';
import { Preloader } from '@components/Preloader';
import { SidebarTeamsProjectPlaceholder } from '@components/SidebarWrapper/_components/SidebarTeamsProject/_components/SidebarTeamsProjectPlaceholder';

const projectsPlaceholder = [...Array(6)];

const SidebarWrapper = ({
  children,
  modalOpen,
  fetchUserData,
  userProjects = [],
  userTeams = [],
  ...rest
}) => {
  const [isSidebarOpened, toggleSidebarOpen] = useState(true);

  useEffect(() => {
    fetchUserData('teams', 1, 9999);
    rest.socketConnect(API_URL.SOCKET.NOTIFICATIONS);
  },[]);

  useEffect(() => {
    if (rest.teamsLoaded && !rest.currentTeam) rest.changeCurrentTeam(userTeams[0].teamId);
  },[rest.teamsLoaded]);

  useEffect(() => {
    const token = getFromState(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
    if (rest.isNotifyConnected && rest.currentTeam) {
      fetchUserData('projects', 1, 9999, null, rest.currentTeam, null, true);
      rest.subscribeOnNotificationsChannel(
        SOCKET_METHODS.SUBSCRIBE.SIDEBAR_SUBSCRIBE_TEAM,
        SOCKET_METHODS.BROADCAST.SIDEBAR_BROADCAST, {
          TeamId: rest.currentTeam,
          Token: token,
        })
    }
  },[rest.isNotifyConnected, rest.currentTeam]);

  return (
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
        <LinkButtonsContainer userTeams={userTeams} changeCurrentTeam={rest.changeCurrentTeam}/>
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
        <Preloader
          iconName="preloader-light"
          addClassImage="w-33"
          addClassPreloader={rest.sidebarLoading ? 'flex justify-content-center align-items-center preloaderOverlay-dark' : 'display-none'}
        >
          {!rest.projectsLoaded
            ? projectsPlaceholder.map(() => <SidebarTeamsProjectPlaceholder key={getUniqueKey()}/>)
            : userProjects.map(item => <SidebarTeamsProject
              key={item.projectId}
              userProject={item}
              isSidebarOpened={isSidebarOpened}
            />)}
        </Preloader>
      </CustomScrollbar>
      <div className={`${s.footer}`}>
        <TeamsButtons isOpen={isSidebarOpened} modalOpen={modalOpen}/>
      </div>
    </div>
  );
};

SidebarWrapper.propTypes = {
  modalOpen: PT.func,
  fetchUserData: PT.func,
  userProjects: PT.arrayOf(PT.object),
  userTeams: PT.arrayOf(PT.object),
  // modal: PT.arrayOf(PT.string),
};

export default SidebarWrapper;
