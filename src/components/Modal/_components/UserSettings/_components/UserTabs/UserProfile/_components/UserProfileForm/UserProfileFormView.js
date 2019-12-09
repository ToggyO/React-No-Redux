import React, { useRef } from 'react';
import { Field, Form, Formik } from 'formik';
import PT from 'prop-types';

import { TextInput } from '@components/Form/TextInput';

const UserProfileFormView = ({ userData }) => {
  const formikRef = useRef(null);

  return (
    <Formik
      ref={formikRef}
      initialValues={{ name: userData.name }}
      // validate={validateForm.confirmSignUp}
      onSubmit={() => {}}
      render={({ errors, touched }) => (
        <Form>
          {errors.global && <div className="formik-error error-label">{errors.global}</div>}
          {errors.googleToken && <div className="formik-error error-label">{errors.googleToken}</div>}
          <Field
            type="text"
            name="name"
            placeholder="Enter your name"
            component={TextInput}
            // addClassWrapper="pt-4 pb-2"
            // addClassInput="default_input pt-4 pb-4"
          />
          {errors.name && touched.name && <div className="formik-error error-label">{errors.email}</div>}
        </Form>
      )}
    />
  );
};

UserProfileFormView.propTypes = {
  userData: PT.oneOfType([PT.object, PT.arrayOf(PT.object)]),
};

export default UserProfileFormView;
