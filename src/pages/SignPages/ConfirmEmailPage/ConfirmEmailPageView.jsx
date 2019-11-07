import React from 'react';
import PT from 'prop-types';
import { Helmet } from 'react-helmet';

import { ConfirmEmailFormContainer } from './_components/ConfirmEmailForm';

import { FormTemplateView } from '@components/Form/FormTemplate';


const ConfirmEmailPageView = ({ userInfo = {} }) => (
  <>
    <Helmet defaultTitle="Squad.io - Confirm email">
      <meta name="description" content="Confirm email page" />
    </Helmet>
    <FormTemplateView
      titleLarge="Confirm your email"
      titleSmall={`We have sent a confirmation code to ${userInfo.email}. Enter this code below:`}
      addTitleSmallClass="pl-20 pr-20"
      link={<p>
        Didn’t receive a confirmation code?&nbsp;
        <a className="form_link" href="#">Click here</a>
      </p>}
    >
      <ConfirmEmailFormContainer />
    </FormTemplateView>
  </>
);

ConfirmEmailPageView.propTypes = {
  userInfo: PT.object,
};

export default ConfirmEmailPageView;
