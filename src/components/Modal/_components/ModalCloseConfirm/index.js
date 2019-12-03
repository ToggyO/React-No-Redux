import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

const ModalCloseConfirm = ({ onClose }) => (
  <div className={s.wrapper}>
    <div className={`${s.message} pt-4 pb-4`}>
      <article className="pb-2 pt-2">Error</article>
      <p className="pb-2 pt-2">Something went wrong.</p>
    </div>
    <div className={s.button}>
      <button type="button" className="btn green full_width rounded p-4" onClick={onClose}>
        Confirm
      </button>
      <button type="button" className="btn primary-outlined full_width rounded p-4">
        Cancel
      </button>
    </div>
    {/* <div className={`${s.close} pt-4 pr-4`}  onClick={onClose}> */}
    {/*  <button type="button" className="btn"> */}
    {/*    <Icon iconName="close-modal"/> */}
    {/*  </button> */}
    {/* </div> */}
  </div>
);

ModalCloseConfirm.propTypes = {
  onClose: PT.func,
};

export default ModalCloseConfirm;
