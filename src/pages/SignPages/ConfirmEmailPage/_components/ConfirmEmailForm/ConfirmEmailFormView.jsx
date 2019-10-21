import React from 'react';

import { ConfirmEmailInput } from '@components/Form/ConfirmEmailInput';

const ConfirmEmailFormView = () => (
  <ConfirmEmailInput name="confirmEmail" maxLength={6} addClassWrapper="pt-4 pb-4"/>
);

export default ConfirmEmailFormView;
