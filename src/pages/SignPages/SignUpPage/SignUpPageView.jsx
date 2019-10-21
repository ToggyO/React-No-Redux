import React from 'react';
import { Helmet } from 'react-helmet';
import PT from 'prop-types';

import { SignUpFormContainer } from './_components/SignUpForm';

const SignUpPageView = ({ loading }) => (
  <>
    <Helmet defaultTitle="Squad.io - Creat account">
      <meta name="description" content="Sign up page" />
    </Helmet>
    {loading ? <div>LOADING...</div> : <SignUpFormContainer />}
  </>
);

SignUpPageView.propTypes = {
  loading: PT.bool,
};

export default SignUpPageView;
