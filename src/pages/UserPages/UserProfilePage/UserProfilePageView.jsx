import React from 'react';

import { Helmet } from 'react-helmet';

import s from './style.module.sass';


const UserProfilePageView = () => (
  <>
    <Helmet defaultTitle="Squad.io - Settings">
      <meta name="description" content="User profile page" />
    </Helmet>
    <div className={s.wrapper}>
      <div className={s.container}>
        p
      </div>
    </div>
  </>
);

export default UserProfilePageView;
