import React from 'react';
import PT from 'prop-types';
import { Helmet } from 'react-helmet';

import { ConfirmEmailFormContainer } from './_components/ConfirmEmailForm';

import MessageSuccess from '@components/MessageSuccess';
import { FormTemplateView } from '@components/Form/FormTemplate';


const ConfirmEmailPageView = ({ userInfo = {}, sendNewCode, withExtra, clearExtra }) => {
  const sendNewConfirmationCode = async () => {
    await clearExtra();
    await sendNewCode(userInfo.email);
  };

  return (
    <>
      <Helmet defaultTitle="Squad.io - Confirm email">
        <meta name="description" content="Confirm email page" />
      </Helmet>
      <div className="flex flex-column relative">
        {withExtra && <MessageSuccess message={`Confirmation code is sent to ${userInfo.email}`}/>}
        <FormTemplateView
          titleLarge="Confirm your email"
          titleSmall={`We have sent a confirmation code to ${userInfo.email}. Please enter this code below:`}
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
          <ConfirmEmailFormContainer />
        </FormTemplateView>
      </div>
    </>
  )
};

ConfirmEmailPageView.propTypes = {
  userInfo: PT.object,
  sendNewCode: PT.func,
  withExtra: PT.oneOfType([
    PT.string,
  ]),
  clearExtra: PT.func,
};

export default ConfirmEmailPageView;
