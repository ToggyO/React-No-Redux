import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

const RenderList = ({

  email,
  addWrapperClass,
  addContainerClass,
  addTextClass,
  emails,
  setEmails,
}) => {
  const removeEmailFromArray = () => {
    // const
  };

  return (
    <div className={`${s.wrapper} ${addWrapperClass}`}>
      <div className={`${s.container} ${addContainerClass}`}>
        <div className={`${s.email} ${addTextClass}`}>{email}</div>
        <div className="pl-2 pr-2" onClick={removeEmailFromArray}>X</div>
      </div>
    </div>
  )
};

RenderList.propTypes = {
  key: PT.number,
  email: PT.string,
  addWrapperClass: PT.string,
  addContainerClass: PT.string,
  addTextClass: PT.string,
};

export default RenderList;
