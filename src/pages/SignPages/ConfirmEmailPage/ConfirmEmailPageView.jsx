import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ConfirmEmailPageView = () => (
  <>
    <Helmet defaultTitle="Squad.io - Confirm email">
      <meta name="description" content="Confirm email page" />
    </Helmet>
    <div>
      <Link to="/auth/signup">go to sign up</Link>
    </div>
  </>
);

export default ConfirmEmailPageView;
