import React from 'react';
import PropTypes from 'prop-types';

import { ERROR_CODES } from '@config/errorCodes';
import { responseFormikError } from '@utils/index';
import { ConfirmEmailInput } from '@components/Form/ConfirmEmailInput';

const ConfirmEmailFormView = ({ errorsFromBackend, confirmEmail }) => {
  const setErrors = errors => responseFormikError(errors, ERROR_CODES);

  return (
    <>
      {setErrors(errorsFromBackend).global && <div className="formik-error error-label">{setErrors(errorsFromBackend).global}</div>}
      <ConfirmEmailInput
        name="token"
        maxLength={6}
        addClassWrapper="pt-4 pb-4"
        errorsFromBackend={errorsFromBackend}
        onClick={confirmEmail}
      />
    </>
  );
};

ConfirmEmailFormView.propTypes = {
  errorsFromBackend: PropTypes.arrayOf(PropTypes.object),
  confirmEmail: PropTypes.func,
};

export default ConfirmEmailFormView;

// const ConfirmEmailFormView = () => (
//   <Formik
//     ref={formikRef}
//     initialValues={{ token: '' }}
//     validate={validateForm.confirmSignUp}
//     onSubmit={values => {
//       signUpWithEmailRequest(values);
//     }}
//     render={({ errors, touched, isValid }) => (
//       <Form>
//         {errors.global &&
//         <div className="formik-error error-label">{errors.global}</div>}
//         <Field
//           name="token"
//           render={({ field, form: { touched, errors } }) => <ConfirmEmailInput
//             name="confirmEmail"
//             maxLength={6}
//             addClassWrapper="pt-4 pb-4"/>}
//         />
//         {errors.email && touched.email &&
//         <div className="formik-error error-label">{errors.email}</div>}
//       </Form>
//     )}
//   />
//
// );
