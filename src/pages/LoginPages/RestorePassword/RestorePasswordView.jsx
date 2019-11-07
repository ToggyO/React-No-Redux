import React from 'react';
import PT from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { RestorePasswordFormContainer } from './_components/RestorePasswordForm';

import { MessageSuccess } from '@components/MessageSuccess';
import { ROUTES } from '@config/routes';
import { FormTemplateView } from '@components/Form/FormTemplate';

const RestorePasswordView = ({ withExtra = '' }) => (
  <>
    <Helmet defaultTitle="Squad.io - Restore password">
      <meta name="description" content="Sign in page" />
    </Helmet>
    <div className="flex flex-column">
      {withExtra && <MessageSuccess message={`Recovery link is sent to ${withExtra}`}/> }
      <FormTemplateView
        titleLarge="Restore password"
        titleSmall="Enter the email you used to sign up and we'll send you a link to reset your password."
        addTitleSmallClass="pl-2 pr-2"
        link={
          <>
            <p>
              If you don't receive the email within a few minutes, please please try again.
            </p>
            <p className="pt-6">or&nbsp;
              <Link
                className="form_link"
                to={ROUTES.AUTH.ROOT + ROUTES.AUTH.LOGIN_IN}>
                Log In
              </Link>
            </p>
          </>}
        addLinkClass="pl-10 pr-10"
      >
        <RestorePasswordFormContainer />
      </FormTemplateView>
    </div>
  </>
);

RestorePasswordView.propTypes = {
  withExtra: PT.oneOfType([
    PT.string,
  ]),
};

export default RestorePasswordView;
