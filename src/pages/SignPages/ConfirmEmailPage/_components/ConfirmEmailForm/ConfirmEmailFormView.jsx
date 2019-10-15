import React from 'react';

import { FormTemplateView } from '@components/Form/FormTemplate';
import { ConfirmEmailInput } from '@components/Form/ConfirmEmailInput';

const ConfirmEmailFormView = () => (
  <FormTemplateView
    titleLarge="Confirm your email"
    titleSmall="We have sent a confirmation code to name@company.com. Enter this code below:"
    link="Didn’t receive a confirmation code? Click here"
  >
    <ConfirmEmailInput name="confirmEmail" maxLength={6} addClassWrapper="pt-4 pb-4" />
  </FormTemplateView>
);

export default ConfirmEmailFormView;
