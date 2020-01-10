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


const UserSettings = ({
  location,
  onClose,
  loading,
  userData,
  isUserUpdating,
  fetchUserData,
  updateUserData,
  options = {},
  ...rest
}) => {
  const [isDataFetched, setDataFetched] = useState(false);
  const [currentTab, setTab] = useState(options.userProfileTab);
  const [currentTeamId, setTeam] = useState(options.checkedTeamFromSidebar || null);
  const userDataFromLocalState = getFromState(LOCAL_STORAGE_KEYS.USER);

  useEffect(() => {
    // fetchUserData('teams', 1, 9999);
    fetchUserData(null, 1, 9999);
  }, []);

  useEffect(() => {
    const { teamsLoader, userDataLoader } = rest;
    if (teamsLoader && userDataLoader) setDataFetched(true);
  }, [rest.teamsLoader, rest.userDataLoader]);

  const onRenderSettingsPageTab = key => {
    switch (key) {
      case 'Billing':
        return <div>Billing</div>;
      case 'Manage users':
        return <div>Manage users</div>;
      case 'Profile':
        return <UserProfileView
          userData={userDataFromLocalState || userData}
          isDataFetched={isDataFetched}
          isUserUpdating={isUserUpdating}
          updateUserData={updateUserData}
          modalOpen={rest.modalOpen}
        />;
      case 'Preferences':
        return <div>Preferences</div>;
      case 'Notifications':
        return <div>Notifications</div>;
      case 'Teams':
        return <UserTeamsView
          currentTeamId={currentTeamId}
          teams={rest.userTeams}
          isUserUpdating={isUserUpdating}
          updateSingleUserTeam={rest.updateSingleUserTeam}
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
                {onRenderSettingsPageTab(currentTab)}
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
  options: PT.object,
};

export default UserSettings;
