import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';


const Handler500 = ({ onClose }) => (
  <div className={s.wrapper}>
    <div className={`${s.article} pt-4 pb-4`}>
      <article>ПЯТИСОТКА - ПЯТИСОТОЧКА</article>
    </div>
    <div className={s.button} onClick={onClose}>
      <button type="button" className="btn green full_width rounded p-4">Трай эгейн</button>
    </div>
  </div>
);

Handler500.propTypes = {
  onClose: PT.func,
};

export default Handler500;
