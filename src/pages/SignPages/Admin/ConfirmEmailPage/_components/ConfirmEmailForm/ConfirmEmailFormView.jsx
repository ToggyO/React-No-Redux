import React, { useEffect } from 'react';
import PT from 'prop-types';

import { ERROR_CODES } from '@config/errorCodes';
import { responseFormikError } from '@utils/index';
import { ConfirmEmailInput } from '@components/Form/ConfirmEmailInput';


const ConfirmEmailFormView = ({ errorsFromBackend, confirmEmail, clearStoreErrors, clearExtra }) => {
  const setErrors = errors => responseFormikError(errors, ERROR_CODES);

  useEffect(() => () => clearStoreErrors(),[]);

  return (
    <>
      <ConfirmEmailInput
        name="token"
        maxLength={6}
        addClassWrapper="pt-4 pb-4"
        errorsFromBackend={setErrors(errorsFromBackend)}
        onClick={confirmEmail}
        clearStoreErrors={clearStoreErrors}
        clearExtra={clearExtra}
        addClassInput="default_input"
        addClassInputContainer="form_background"
        addClassFocusedInput="form_border_focus"
        addClassBlurredInput="form_border"
        buttonText="Next"
      />
    </>
  );
};

ConfirmEmailFormView.propTypes = {
  errorsFromBackend: PT.arrayOf(PT.object),
  confirmEmail: PT.func,
  clearStoreErrors: PT.func,
  clearExtra: PT.func,
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
