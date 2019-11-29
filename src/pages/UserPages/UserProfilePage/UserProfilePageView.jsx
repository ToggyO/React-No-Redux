import React from 'react';

import { Helmet } from 'react-helmet';

import s from './style.module.sass';


const UserProfilePageView = () => (
  <>
    <Helmet defaultTitle="Squad.io - Home">
      <meta name="description" content="Home page" />
    </Helmet>
    <div className={s.test}/>
  </>
);

export default UserProfilePageView;
