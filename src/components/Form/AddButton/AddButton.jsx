import React from 'react';
import PT from 'prop-types';

const AddButton = ({ values, emails, fieldName, setEmails, setFieldValue, setFieldError }) => {
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
    <div onClick={addToList}>
      <button type="button">
        <div style={{ width: 10, height: 10 , backgroundColor: 'red'}}/>
      </button>
    </div>
  )
};

AddButton.propTypes = {
  values: PT.object,
  emails: PT.array,
  fieldName: PT.string,
  setEmails: PT.func,
  setFieldValue: PT.func,
  setFieldError: PT.func,
};

export default AddButton;
