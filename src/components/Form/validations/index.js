export const validateField = {
  email: value => {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email';
    }
    return error;
  },
  password: value => {
    let error;
    if (!value) {
      error = 'Required';
    } else if (value.length < 6 || value.length > 30) {
      error = 'Password should include min 6 max 30 characters';
    } else if (!/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(value)) {
      error = 'Password should include only digits, latin letters or special characters';
    }
    return error;
    // let error;
    // if (!value) {
    //   error = 'Required';
    // } else if (value.length < 6) {
    //   error = 'min 6 symbols';
    // }
    // return error;
  },
  name: value => {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[a-zA-Z0-9]+$/i.test(value)) {
      error = 'Eng symbols only';
    }
    return error;
  },
};

export const validateForm = {
  confirmPassword: values => {
    let errors = {};
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 6 || values.password.length > 30) {
      errors.password = 'Password should include min 6 max 30 characters';
    } else if (!/^[0-9a-zA-Z~!@#$%^&*_\-+=`|(){}[\]:;"'<>,.?/]+$/g.test(values.password)) {
      errors.password = 'Password should include only digits, latin letters or special characters';
    }

    if (!values.passwordConfirm || values.passwordConfirm !== values.password) {
      errors.passwordConfirm = 'Passwords should match';
    }
    return errors;
  },
};
