import React from 'react';
import { Helmet } from 'react-helmet';

import PasswordEnterFormView from './_components/PasswordEnterForm/PasswordEnterFormView';

const PasswordEnterPageView = () => (
  <>
    <Helmet defaultTitle="Squad.io - Choose your password">
      <meta name="description" content="Sign up page" />
    </Helmet>
    <PasswordEnterFormView />
  </>
);

export default PasswordEnterPageView;
