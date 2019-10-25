import React from 'react';

import s from './style.module.sass';

const TutorialPageFormView = ({ errorsFromBackend, registrationDone }) => (
  <>
    <iframe
      className={`${s.iframe} mb-7`}
      title="This is a unique title"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/_InKlPesrcU?rel=0"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <button
      type="button"
      // disabled={!props.isValid}
      className="btn green-filled rounded p-4 full_width login-page-button"
      style={{ maxWidth: 438 }}
      onClick={registrationDone}
    >
      I'm ready!
    </button>
  </>
);

export default TutorialPageFormView;
