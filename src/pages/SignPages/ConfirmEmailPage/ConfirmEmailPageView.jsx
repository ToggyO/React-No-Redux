import React, { useState } from 'react';
import PT from 'prop-types';
import { Helmet } from 'react-helmet';

import { ConfirmEmailFormContainer } from './_components/ConfirmEmailForm';

import MessageSuccess from '@components/MessageSuccess';
import { FormTemplateView } from '@components/Form/FormTemplate';
import api from '@services/api';


const ConfirmEmailPageView = ({ userInfo = {} }) => {
  const [flag, setFlag] = useState(false);

  const sendNewConfirmationCode = async () => {
    setFlag(false);
    await api.other.sendNewConfirmationCode(userInfo.email);
    setFlag(true);
  };

  return (
    <>
      <Helmet defaultTitle="Squad.io - Confirm email">
        <meta name="description" content="Confirm email page" />
      </Helmet>
      <div className="flex flex-column relative">
        {flag && <MessageSuccess message={`Confirmation code is sent to ${userInfo.email}`}/>}
        <FormTemplateView
          titleLarge="Confirm your email"
          titleSmall={`We have sent a confirmation code to ${userInfo.email}. Enter this code below:`}
          addTitleSmallClass="pl-20 pr-20"
          link={<p>
            Didn’t receive a confirmation code?&nbsp;
            <button
              type="button"
              className="btn form_link"
              onClick={sendNewConfirmationCode}
            >
              Click here
            </button>
          </p>}
        >
          <ConfirmEmailFormContainer setFlag={setFlag}/>
        </FormTemplateView>
      </div>
    </>
  )
};

ConfirmEmailPageView.propTypes = {
  userInfo: PT.object,
};

export default ConfirmEmailPageView;
