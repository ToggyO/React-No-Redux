import React from 'react';
import { Helmet } from 'react-helmet';

import { SetCompanyNameFormView } from './_components/SetCompanyNameForm';

const SetCompanyNamePageView = () => (
  <>
    <Helmet defaultTitle="Squad.io - Choose company name">
      <meta name="description" content="Sign up page" />
    </Helmet>
    <SetCompanyNameFormView />
  </>
);

export default SetCompanyNamePageView;
