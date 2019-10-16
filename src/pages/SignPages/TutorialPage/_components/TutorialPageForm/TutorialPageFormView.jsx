import React from 'react';

import { FormTemplateView } from '@components/Form/FormTemplate';

const TutorialPageFormView = () => (
  <FormTemplateView
    titleLarge="Great! Here’s a quick tutorial"
    titleSmall="This short video will help you get started."
  >
    1111
    <button
      type="button"
      // disabled={!props.isValid}
      disabled
      className="btn green rounded p-4 full_width login-page-button"
    >
      I'm ready!
    </button>
  </FormTemplateView>
);

export default TutorialPageFormView;
