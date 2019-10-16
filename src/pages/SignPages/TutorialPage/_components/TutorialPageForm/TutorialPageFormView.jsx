import React from 'react';

import { FormTemplateView } from '@components/Form/FormTemplate';

const TutorialPageFormView = () => (
  <FormTemplateView
    titleLarge="Great! Here’s a quick tutorial"
    titleSmall="This short video will help you get started."
  >
    <iframe
      className="mb-7"
      title="This is a unique title"
      width="560" height="315" src="https://www.youtube-nocookie.com/embed/nKFDp9Y52-o"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <button
      type="button"
      // disabled={!props.isValid}
      className="btn green rounded p-4 full_width login-page-button"
      style={{ maxWidth: 438 }}
    >
        I'm ready!
    </button>
  </FormTemplateView>
);

export default TutorialPageFormView;
