import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';



const Handler500 = ({ onClose }) => (
  <div className={s.wrapper}>
    <div className={`${s.message} pt-4 pb-4`}>
      <article className="pb-2 pt-2">Error</article>
      <p className="pb-2 pt-2">Something went wrong.</p>
    </div>
    <div className={s.button} onClick={onClose}>
      <button type="button" className="btn green full_width rounded p-4">Retry</button>
    </div>
    <div className={`${s.close} pt-4 pr-4`}  onClick={onClose}>
      <button type="button" className="btn">
        <Icon iconName="close-modal"/>
      </button>
    </div>
  </div>
);

Handler500.propTypes = {
  onClose: PT.func,
};

export default Handler500;
