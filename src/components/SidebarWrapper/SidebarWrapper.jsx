/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PT from 'prop-types';

import s from './style.module.sass';
import { LinkButtonsContainer } from './_components/LinkButtonsContainer';

import { ColorBlocks } from '@components/StyledComponents';
import { Icon } from '@components/Icon';
import { TeamsButtons } from '@components/SidebarWrapper/_components/TeamsButtons';
import { SidebarTeamsProject } from '@components/SidebarWrapper/_components/SidebarTeamsProject';
import CustomScrollbar from '@components/Scrollbar';
import { LOCAL_STORAGE_KEYS } from '@config';
import { API_URL } from '@config/apiUrl';
import { SOCKET_METHODS } from '@config/socketMethods';
import { checkLocalStorage, getFromState, getUniqueKey } from '@utils/index';
import { Preloader } from '@components/Preloader';
import { SidebarTeamsProjectPlaceholder } from '@components/SidebarWrapper/_components/SidebarTeamsProject/_components/SidebarTeamsProjectPlaceholder';
import { writeToLocalState } from '@services/ls';
import { writeToSessionState } from '@services/ss';
import { USER_COMMON } from '@config/common';


const projectsPlaceholder = [...Array(6)];

const SidebarWrapper = ({
  children,
  modalOpen,
  fetchUserData,
  userProjects = [],
  userTeams = [],
  ...rest
}) => {
  const [isSidebarOpened, toggleSidebarOpen] = useState(getFromState(LOCAL_STORAGE_KEYS.SIDEBAR_STATE));

  const rememberSidebarState = state => {
    if (checkLocalStorage()) {
      return writeToLocalState(LOCAL_STORAGE_KEYS.SIDEBAR_STATE, state);
    }
    return writeToSessionState(LOCAL_STORAGE_KEYS.SIDEBAR_STATE, state);
  };

  useEffect(() => {
    fetchUserData(USER_COMMON.DATA_TYPES.TEAMS, 1, 9999);
    rest.socketConnect(API_URL.SOCKET.NOTIFICATIONS);
  },[]);

  // TODO костыль
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (rest.teamsLoaded && !rest.currentTeam.id) {
      rest.changeCurrentTeam({
        id: userTeams[0].teamId,
        name: userTeams[0].team.name,
      });
      if (checkLocalStorage()) {
        return writeToLocalState(LOCAL_STORAGE_KEYS.SIDEBAR_CURRENT_TEAM, {
          id: userTeams[0].teamId,
          name: userTeams[0].team.name,
        });
      }
      return writeToSessionState(LOCAL_STORAGE_KEYS.SIDEBAR_CURRENT_TEAM, {
        id: userTeams[0].teamId,
        name: userTeams[0].team.name,
      });
    }

  },[rest.teamsLoaded]);

  useEffect(() => {
    const token = getFromState(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
    if (rest.isNotifyConnected && rest.currentTeam.id) {
      fetchUserData(USER_COMMON.DATA_TYPES.PROJECTS, 1, 9999, null, rest.currentTeam.id, null, true);
      rest.subscribeOnNotificationsChannel(
        SOCKET_METHODS.SUBSCRIBE.SIDEBAR_SUBSCRIBE_TEAM,
        SOCKET_METHODS.BROADCAST.SIDEBAR_BROADCAST, {
          TeamId: rest.currentTeam.id,
          Token: token,
        })
    }
  },[rest.isNotifyConnected, rest.currentTeam.id]);

  return (
    <ColorBlocks.PrimaryColorBlock className={`${s.sidebar} ${isSidebarOpened ? s.sidebar_shown : ''} flex flex-column`}>
      <div className={`${s.logo_container} flex justify-content-center align-items-center`}>
        <div className={`${s.logo} ${isSidebarOpened ? s.logo_large : s.logo_small}`}>
          <Icon iconName="squad-logo" className={s.image}/>
        </div>
        <button
          type="button"
          className={`${s.toggle_button}`}
          onClick={() => {
            rememberSidebarState(!isSidebarOpened);
            toggleSidebarOpen(!isSidebarOpened);
          }}
        >
          <Icon iconName="arrow-right" className={!isSidebarOpened ? 'rotate-180' : ''}/>
        </button>
      </div>
      <div className={`${s.links} ${isSidebarOpened ? s.links_horizontal : s.links_vertical} flex justify-content-center align-items-center flex-wrap-wrap`}>
        <LinkButtonsContainer
          userTeams={userTeams}
          currentTeam={rest.currentTeam}
          changeCurrentTeam={rest.changeCurrentTeam}
          isSidebarOpened={isSidebarOpened}
          modalOpen={modalOpen}
        />
      </div>
      <div className={`${s.projects} relative`}>
        <Preloader
          iconName="preloader"
          addClassImage="w-33"
          addClassPreloader={rest.sidebarLoading ? 'flex justify-content-center align-items-center' : 'display-none'}
          colorScheme="inverse"
        >
          <CustomScrollbar
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
            {!rest.projectsLoaded
              ? projectsPlaceholder.map(() => <SidebarTeamsProjectPlaceholder key={getUniqueKey()} isSidebarOpened={isSidebarOpened}/>)
              : userProjects.map(item => <SidebarTeamsProject
                key={item.projectId}
                userProject={item}
                isSidebarOpened={isSidebarOpened}
              />)}
          </CustomScrollbar>
        </Preloader>
      </div>
      <div className={`${s.footer}`}>
        <TeamsButtons isOpen={isSidebarOpened} modalOpen={modalOpen}/>
      </div>
    </ColorBlocks.PrimaryColorBlock>
  );
};

SidebarWrapper.propTypes = {
  modalOpen: PT.func,
  fetchUserData: PT.func,
  userProjects: PT.arrayOf(PT.object),
  userTeams: PT.arrayOf(PT.object),
};

export default SidebarWrapper;
