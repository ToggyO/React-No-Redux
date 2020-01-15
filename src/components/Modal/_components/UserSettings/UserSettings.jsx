import React, { useEffect, useState } from 'react';
import PT from 'prop-types';

import s from './style.module.sass';
import { style as preloaderStyle } from './preloader_style';
import { UserProfileSidebarView } from './_components/UserProfileSidebar';
import  {UserProfileView } from './_components/UserTabs/UserProfile';
import UserTeamsView from './_components/UserTabs/UserTeams/UserTeamsView';

import { Preloader } from '@components/Preloader';
import CustomScrollbar from '@components/Scrollbar';
import { UserProfileTabsWrapper } from '@components/Modal/_components/UserSettings/_components/UserTabs/UserProfileTabsWrapper';
import { getFromState } from '@utils/index';
import { LOCAL_STORAGE_KEYS } from '@config';
import { ModalBaseColorBlock } from '@components/StyledComponents/ColorBlocks';
import { USER_COMMON } from '@config/common';


const UserSettings = ({
  location,
  onClose,
  loading,
  userData,
  isUserUpdating,
  fetchUserData,
  updateUserData,
  clearUserExtra,
  options = {},
  withExtra,
  ...rest
}) => {
  const [isDataFetched, setDataFetched] = useState(false);
  const [currentTab, setTab] = useState({
    prefix: options.userProfileTabPrefix,
    tab: options.userProfileTab,
    teamName: options.userProfileTeamName || '',
  });
  const [currentTeamId, setTeam] = useState(options.checkedTeamFromSidebar || null);
  const userDataFromLocalState = getFromState(LOCAL_STORAGE_KEYS.USER);

  useEffect(() => {
    fetchUserData(null, 1, 9999);
  }, []);

  useEffect(() => {
    const { teamsLoader, userDataLoader } = rest;
    if (teamsLoader && userDataLoader) setDataFetched(true);
  }, [rest.teamsLoader, rest.userDataLoader]);

  useEffect(() => () => clearUserExtra(),[]);

  const onRenderSettingsPageTab = key => {
    switch (key) {
      case USER_COMMON.USER_SETTINGS_TABS.BILLING:
        return <div>Billing</div>;
      case USER_COMMON.USER_SETTINGS_TABS.MANAGE_USERS:
        return <div>Manage users</div>;
      case USER_COMMON.USER_SETTINGS_TABS.PROFILE:
        return <UserProfileView
          userData={userDataFromLocalState || userData}
          isDataFetched={isDataFetched}
          isUserUpdating={isUserUpdating}
          updateUserData={updateUserData}
          modalOpen={rest.modalOpen}
        />;
      case USER_COMMON.USER_SETTINGS_TABS.PREFERENCES:
        return <div>Preferences</div>;
      case USER_COMMON.USER_SETTINGS_TABS.NOTIFICATIONS:
        return <div>Notifications</div>;
      case USER_COMMON.USER_SETTINGS_TABS.TEAMS:
        return <UserTeamsView
          currentTab={currentTab}
          currentTeamId={currentTeamId}
          setTeam={setTeam}
          setTab={setTab}
          teams={rest.userTeams}
          isUserUpdating={isUserUpdating}
          updateSingleUserTeam={rest.updateSingleUserTeam}
          getListOfTeamUsers={rest.getListOfTeamUsers}
          teamsUsers={withExtra.items}
          modalOpen={rest.modalOpen}
          teamsDeleting={rest.teamsDeleting}
        />;
      default:
        return <div>Test</div>;
    }
  };

  return (
    <Preloader
      iconName="preloader"
      style={preloaderStyle}
      addClassPreloader={loading || !isDataFetched
        ? 'flex justify-content-center align-items-center'
        : 'display-none'}
      addClassChildren="flex justify-content-center align-items-center"
      colorScheme="default"
    >
      <ModalBaseColorBlock className={`${s.container} relative`}>
        <CustomScrollbar
          style={{ width: '100%', maxWidth: 260, height: '100vh' }}
          autoHide
          universal
          thumbStyleHorizontal={{
            backgroundColor: '#6D768A',
            height: 4,
            borderRadius: 2,
          }}
          thumbStyleVertical={{
            backgroundColor: '#6D768A',
            width: 4,
            borderRadius: 2,
          }}
        >
          <UserProfileSidebarView
            teams={rest.userTeams}
            teamsLoader={rest.teamsLoader}
            currentTab={currentTab}
            setTab={setTab}
            setTeam={setTeam}
          />
        </CustomScrollbar>
        <div className={`${s.children} flex flex-column`}>
          <UserProfileTabsWrapper currentTab={currentTab} onClose={onClose}>
            <CustomScrollbar
              style={{ height: '100%' }}
              autoHide
              universal
              thumbStyleHorizontal={{
                backgroundColor: '#6D768A',
                height: 4,
                borderRadius: 2,
              }}
              thumbStyleVertical={{
                backgroundColor: '#6D768A',
                width: 4,
                borderRadius: 2,
              }}
            >
              <div className={`${s.switch_pages} flex flex-column`}>
                {onRenderSettingsPageTab(currentTab.tab)}
              </div>
            </CustomScrollbar>
          </UserProfileTabsWrapper>
        </div>
      </ModalBaseColorBlock>
    </Preloader>
  );
};

UserSettings.propTypes = {
  location: PT.object,
  userData: PT.oneOfType([
    PT.object,
    PT.arrayOf(PT.object),
  ]),
  userTeams: PT.oneOfType([
    PT.object,
    PT.arrayOf(PT.object),
  ]),
  onClose: PT.func,
  isUserUpdating: PT.bool,
  fetchUserData: PT.func,
  updateUserData: PT.func,
  loading: PT.bool,
  clearUserExtra: PT.func,
  options: PT.object,
  withExtra: PT.oneOfType([
    PT.object,
    PT.string,
    PT.arrayOf(PT.object),
  ]),
};

export default UserSettings;
