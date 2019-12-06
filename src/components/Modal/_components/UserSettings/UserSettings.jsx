import React, { useEffect } from 'react';
import PT from 'prop-types';

import s from './style.module.sass';
import { style as preloaderStyle } from './preloader_style';
import { UserProfileSidebarView } from './_components/UserProfileSidebar';

import { parseRouteString } from '@utils/index';
// import { getFromLocalState } from '@services/ls';
// import { getFromSessionState } from '@services/ss';
import { Preloader } from '@components/Preloader';
import CustomScrollbar from '@components/Scrollbar';

/* eslint-disable */
const UserSettings = ({
  location,
  onClose,
  loading,
  fetchUserData,
  ...rest
}) => {
  const parsedPathname = parseRouteString(location.pathname); // obsolete
  // const userInfo = getFromLocalState('USER') || getFromSessionState('USER');

  useEffect(() => {
    fetchUserData('/companies', 1, 9999);
  },[]);

  return (
    <Preloader
      style={preloaderStyle}
      addClassPreloader={loading ? 'flex justify-content-center align-items-center' : 'display-none'}
      // addClassPreloader='flex justify-content-center align-items-center'
      // addClassPreloader='display-none'
      addClassChildren="flex justify-content-center align-items-center"
    >
      <div className={`${s.container} relative`}>
        <CustomScrollbar
          style={{ width: '100%', maxWidth: 260, height: '100vh' }}
          autoHide
          universal
          // autoHeight
          // autoHeightMax={882}
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
          <UserProfileSidebarView parsedPathname={parsedPathname}/>
        </CustomScrollbar>
        <div className={`${s.children}`}>
          <CustomScrollbar
            style={{ height: '100%'}}
            autoHide
            universal
            // autoHeight
            // autoHeightMax={882}
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
            <div className={`${s.profile} flex flex-column`}>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="button" onClick={onClose}>Cancel</button>
            </div>
          </CustomScrollbar>
          {/* <div>{children}</div> */}
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
};

export default UserSettings;
