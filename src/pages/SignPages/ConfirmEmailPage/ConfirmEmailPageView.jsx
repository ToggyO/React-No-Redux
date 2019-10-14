import React from 'react';
import { Helmet } from 'react-helmet';

import { ConfirmEmailFormView } from './_components/ConfirmEmailForm';

const ConfirmEmailPageView = () => (
  <>
    <Helmet defaultTitle="Squad.io - Confirm email">
      <meta name="description" content="Confirm email page" />
    </Helmet>
    <ConfirmEmailFormView />
  </>
);

export default ConfirmEmailPageView;
