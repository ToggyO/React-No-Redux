import React, { useRef } from 'react';
import PT from 'prop-types';
import { Field, Form, Formik } from 'formik';

import s from './style.module.sass';

import { TextInput } from '@components/Form/TextInput';


const UserProfileView = ({
  userData,
}) => {
  const formikRef = useRef(null);

  return (
    <div className={s.container}>
      <div className={s.headline}>
        <h4>Profile</h4>
      </div>
      <Formik
        ref={formikRef}
        initialValues={{ name: userData.name }}
        // validate={validateForm.confirmSignUp}
        onSubmit={() => {}}
        render={({ errors, touched }) => (
          <Form>
            {errors.global &&
            <div className="formik-error error-label">{errors.global}</div>}
            {errors.googleToken &&
            <div className="formik-error error-label">{errors.googleToken}</div>}
            <Field
              type="text"
              name="name"
              placeholder="Enter your name"
              component={TextInput}
              // addClassWrapper="pt-4 pb-2"
              // addClassInput="default_input pt-4 pb-4"
            />
            {errors.name && touched.name &&
            <div className="formik-error error-label">{errors.email}</div>}
          </Form>
        )}
      />
    </div>
  )
};

UserProfileView.propTypes = {
  userData: PT.oneOfType([
    PT.object,
    PT.arrayOf(PT.object),
  ]),
};

export default UserProfileView;
