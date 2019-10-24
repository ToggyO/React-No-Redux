import React from 'react';

const AddButton = ({ values, inputRef, emails, setEmails }) => {
  const addToList = () => {
    if (values.email) {
      // values.emails.push(values.email);
      // values.email = '';
      // inputRef.current.value = '';
      // console.log(values);
      setEmails(oldArray => [...oldArray, values.email]);
      inputRef.current.value = '';
      console.log(values);
      console.log(emails);
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

export default AddButton;
