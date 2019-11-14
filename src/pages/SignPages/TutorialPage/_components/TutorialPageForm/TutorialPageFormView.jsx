import React from 'react';
import PT from 'prop-types';
import Vimeo from '@u-wave/react-vimeo';

// import s from './style.module.sass';

const TutorialPageFormView = ({registrationDone}) => (
  <>
    <Vimeo
      className="mt-4 mb-7"
      video="https://player.vimeo.com/video/260279525"
      width={560}
      height={315}
      autoplay
      responsive
    />
    <button
      type="button"
      className="btn green-filled rounded p-4 full_width login-page-button"
      style={{maxWidth: 438}}
      onClick={registrationDone}
    >
      I'm ready!
    </button>
    {/* <iframe */}
    {/*  className={`${s.iframe} mb-7`} */}
    {/*  title="This is a unique title" */}
    {/*  width="560" */}
    {/*  height="315" */}
    {/*  src="https://www.youtube.com/embed/_InKlPesrcU?rel=0" */}
    {/*  frameBorder="0" */}
    {/*  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" */}
    {/*  allowFullScreen */}
    {/* /> */}
    {/* <iframe */}
    {/*  title="This is a unique title" */}
    {/*  className={`${s.iframe} mb-7`} */}
    {/*  src="https://player.vimeo.com/video/260279525" */}
    {/*  width="560" */}
    {/*  height="315" */}
    {/*  frameBorder="0" */}
    {/*  webkitallowfullscreen="true" */}
    {/*  mozallowfullscreen="true" */}
    {/*  allowFullScreen */}
    {/* /> */}
  </>
);

TutorialPageFormView.propTypes = {
  registrationDone: PT.func,
};

export default TutorialPageFormView;
