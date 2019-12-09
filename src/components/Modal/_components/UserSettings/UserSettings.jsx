import React, { useEffect, useState } from 'react';
import PT from 'prop-types';

import s from './style.module.sass';
import { style as preloaderStyle } from './preloader_style';
import { UserProfileSidebarView } from './_components/UserProfileSidebar';

import { UserProfileView } from './_components/UserTabs/UserProfile';

import { Preloader } from '@components/Preloader';
import CustomScrollbar from '@components/Scrollbar';
import { UserProfileTabsWrapper } from '@components/Modal/_components/UserSettings/_components/UserTabs/UserProfileTabsWrapper';


const UserSettings = ({
  location,
  onClose,
  loading,
  fetchUserData,
  ...rest
}) => {
  // const userInfo = getFromLocalState('USER') || getFromSessionState('USER');
  const [currentTab, setTab] = useState('Profile');

  useEffect(() => {
    fetchUserData('teams', 1, 9999);
  },[]);

  const onRenderSettingsPageTab = key => {
    switch(key) {
      case 'Billing':
        return <div>Billing</div>;
      case 'Manage users':
        return <div>Manage users</div>;
      case 'Profile':
        return <UserProfileView userData={rest.userData}/>;
      case 'Preferences':
        return <div>Preferences</div>;
      case 'Notifications':
        return <div>Notifications</div>;
      default:
        return <div>Test</div>;
    }
  };

  return (
    <Preloader
      style={preloaderStyle}
      addClassPreloader={loading ? 'flex justify-content-center align-items-center' : 'display-none'}
      addClassChildren="flex justify-content-center align-items-center"
    >
      <div className={`${s.container} relative`}>
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
          />
        </CustomScrollbar>
        <div className={`${s.children} flex flex-column`}>
          <UserProfileTabsWrapper currentTab={currentTab} onClose={onClose}>
            <CustomScrollbar
              style={{ height: '100%'}}
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
          {/* <div className={s.button_block}> */}
          {/*  <button */}
          {/*    type="button" */}
          {/*    className="btn green-filled rounded pt-5 pb-5  ml-10 full_width" */}
          {/*    onClick={onClose} */}
          {/*  > */}
          {/*    Save Changes */}
          {/*  </button> */}
          {/*  <button */}
          {/*    type="button" */}
          {/*    className="btn primary-outlined rounded pt-5 pb-5 ml-10 full_width" */}
          {/*    onClick={onClose} */}
          {/*  > */}
          {/*    Cancel */}
          {/*  </button> */}
          {/* </div> */}
        </div>
      </div>
    </Preloader>
  )
};

UserSettings.propTypes = {
  // children: PT.oneOfType([
  //   PT.node,
  //   PT.element,
  //   PT.func,
  // ]),
  location: PT.object,
  onClose: PT.func,
  fetchUserData: PT.func,
  loading: PT.bool,
};

export default UserSettings;
