import React from 'react';

import { FormTemplateView } from '@components/Form/FormTemplate';
import { ConfirmEmailInput } from '@components/Form/ConfirmEmailInput';


const ConfirmEmailFormView = () => (
  <FormTemplateView
    titleLarge="Confirm your email"
    titleSmall="We have sent a confirmation code to name@company.com. Enter this code below:"
    link="Didn’t receive a confirmation code? Click here"
  >
    <ConfirmEmailInput
      name="google_mail"
      maxLength={6}
      inputstyle={{ paddingTop: 16, paddingBottom: 16 }}
    />
    <button
      type="submit"
      // disabled
      className="btn green rounded p-4 full_width"
      style={{
        fontSize: 19,
        lineHeight: '23px',
        fontWeight: 500,
      }}
    >
      Next
    </button>
  </FormTemplateView>
);

export default ConfirmEmailFormView;
