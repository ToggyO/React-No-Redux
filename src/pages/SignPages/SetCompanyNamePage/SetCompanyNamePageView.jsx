import React from 'react';
import { Helmet } from 'react-helmet';

import { SetCompanyNameFormContainer }  from './_components/SetCompanyNameForm';

import { LogoutButton } from '@components/LogoutButton';

import { FormTemplateView } from '@components/Form/FormTemplate';

const SetCompanyNamePageView = () => (
  <>
    <Helmet defaultTitle="Squad.io - Choose company name">
      <meta name="description" content="Sign up page" />
    </Helmet>
    <FormTemplateView
      titleLarge="What's the name of your company?"
      titleSmall="You can split up the company into teams later."
      link={<LogoutButton addButtonClass="btn form_link mt-6" />}
    >
      <SetCompanyNameFormContainer />
    </FormTemplateView>
  </>
);

export default SetCompanyNamePageView;
