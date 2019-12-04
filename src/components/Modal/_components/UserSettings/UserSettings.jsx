import React from 'react';
import PT from 'prop-types';
import { withRouter } from 'react-router-dom';

import s from './style.module.sass';
import { style as preloaderStyle } from './preloader_style';
import { UserProfileSidebarView } from './_components/UserProfileSidebar';

import { parseRouteString } from '@utils/index';
// import { getFromLocalState } from '@services/ls';
// import { getFromSessionState } from '@services/ss';
import { Preloader } from '@components/Preloader';


const UserSettings = ({ children, location, onClose }) => {
  const parsedPathname = parseRouteString(location.pathname); // obsolete
  // const userInfo = getFromLocalState('USER') || getFromSessionState('USER');

  return (
    <Preloader
      style={preloaderStyle}
      // addClassPreloader='flex justify-content-center align-items-center'
      addClassPreloader='display-none'
      addClassChildren="flex justify-content-center align-items-center"
    >
      <div className={`${s.container} relative`}>
        <UserProfileSidebarView parsedPathname={parsedPathname}/>
        <div className={s.children}>
          <div>{children}</div>
          <button type="button" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </Preloader>
  )
};

UserSettings.propTypes = {
  children: PT.oneOfType([
    PT.node,
    PT.element,
    PT.func,
  ]),
  location: PT.object,
  onClose: PT.func,
};

export default withRouter(UserSettings);
