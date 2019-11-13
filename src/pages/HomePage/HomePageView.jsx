import React from 'react';
import { Helmet } from 'react-helmet';

import s from './style.module.sass';

import { LogoutButton } from '@components/LogoutButton';


const HomePageView = () => (
  <div className={`${s.wrapper} flex align-items-center flex-column`}>
    <Helmet defaultTitle="Squad.io - Home">
      <meta name="description" content="Home page" />
    </Helmet>
    <h1>Protected Home Page</h1>
    <LogoutButton addButtonClass="btn" />
  </div>
);

export default HomePageView;
