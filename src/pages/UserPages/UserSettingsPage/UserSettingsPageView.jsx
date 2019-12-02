import React from 'react';
import PT from 'prop-types';

import { Helmet } from 'react-helmet';

import s from './style.module.sass';
import { UserProfileSidebarView } from './_components/UserProfileSidebar';


const UserSettingsPageView = ({ children }) => (
  <>
    <Helmet defaultTitle="Squad.io - User profile page">
      <meta name="description" content="Settings"/>
    </Helmet>
    <div className={`${s.wrapper} flex justify-content-center align-items-center`}>
      <div className={s.container}>
        <UserProfileSidebarView/>
        <div className={s.children}>{children}</div>
      </div>
    </div>
  </>
);

UserSettingsPageView.propTypes = {
  children: PT.oneOfType([
    PT.node,
    PT.element,
    PT.func,
  ]),
};

export default UserSettingsPageView;
