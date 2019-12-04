import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

const ModalCloseConfirm = ({ onClose, itemKey }) => (
  <div className={s.wrapper}>
    <div className={`${s.message} pt-4 pb-4`}>
      <article className="pb-2 pt-2">Error</article>
      <p className="pb-2 pt-2">Something went wrong.</p>
    </div>
    <div className={s.button}>
      <button
        type="button"
        className="btn green full_width rounded p-4"
        onClick={() => {
          onClose(itemKey);
          onClose('ModalCloseConfirm');
        }}
      >
        Confirm
      </button>
      <button
        type="button"
        className="btn primary-outlined full_width rounded p-4"
        onClick={() => onClose('ModalCloseConfirm')}
      >
        Cancel
      </button>
    </div>
  </div>
);

ModalCloseConfirm.propTypes = {
  onClose: PT.func,
  itemKey: PT.string,
};

export default ModalCloseConfirm;
