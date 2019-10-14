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
    } else if (value.length < 6) {
      error = 'min 6 symbols';
    }
    return error;
  },
  confirmPassword: values => {
    let errors = {};
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 6) {
      errors.password = 'Min 6 symbols';
    }
    if (!values.passwordConfirm) {
      errors.passwordConfirm = 'Required';
    } else if (values.passwordConfirm !== values.password) {
      errors.passwordConfirm = 'Passwords, you entered is not the same';
    }
    return errors;
  },
};
