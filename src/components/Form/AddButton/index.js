import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';

export const AddButton = ({
  values,
  emails,
  fieldName,
  setEmails,
  setFieldValue,
  setFieldError,
  addContainerClass = '',
  addButtonClass = '',
  addIconClass = '',
  errors,
}) => {
  const addToList = () => {
    if (values[fieldName]) {
      const duplicatedValue = emails.filter(item => item === values[fieldName]);
      if (duplicatedValue.length === 0) {
        setEmails(oldArray => [...oldArray, values[fieldName]]);
        setFieldValue(fieldName, '', false);
      } else {
        setFieldError(fieldName, 'Email has already been entered');
      }
    }
  };

  return (
    <div className={`${s.container} ${addContainerClass}`} onClick={addToList}>
      <button type="button" className={`${s.button} ${addButtonClass}`}>
        <Icon
          iconName="add_email"
          className={`${s.icon} ${addIconClass} ${
            !errors[fieldName] && values[fieldName].length > 0 ? 'fill_green' : ''
          }`}
        />
      </button>
    </div>
  );
};

AddButton.propTypes = {
  values: PT.object,
  errors: PT.object,
  emails: PT.array,
  fieldName: PT.string,
  setEmails: PT.func,
  setFieldValue: PT.func,
  setFieldError: PT.func,
  addContainerClass: PT.string,
  addButtonClass: PT.string,
  addIconClass: PT.string,
};
