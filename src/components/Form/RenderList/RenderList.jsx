import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';

const RenderList = ({
  arrayIndex,
  email,
  addContainerClass = '',
  addTextClass = '',
  addDeleteButtonClass = '',
  addIconClass = '',
  emails,
  setEmails,
  style = {},
  icon,
}) => {
  const removeEmailFromArray = () => {
    const emailsCopy = [...emails];
    emailsCopy.splice(arrayIndex, 1);
    setEmails(emailsCopy);
  };

  return (
    <div className={`${s.container} ${addContainerClass}`} style={style.container}>
      <div className={`${s.email} ${addTextClass}`} style={style.email}>
        {email}
      </div>
      <div
        className={`${s.deleteButton} ${addDeleteButtonClass}`}
        onClick={removeEmailFromArray}
        style={style.deleteButton}
      >
        <Icon iconName={icon} className={addIconClass}/>
      </div>
    </div>
  );
};

RenderList.propTypes = {
  arrayIndex: PT.any,
  email: PT.string,
  addContainerClass: PT.string,
  addTextClass: PT.string,
  addDeleteButtonClass: PT.string,
  addIconClass: PT.string,
  emails: PT.array,
  setEmails: PT.func,
  style: PT.object,
  icon: PT.string,
};

export default RenderList;
