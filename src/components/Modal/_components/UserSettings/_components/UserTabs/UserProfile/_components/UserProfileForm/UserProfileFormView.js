import React, { useRef } from 'react';
import { Field, Form, Formik } from 'formik';
import PT from 'prop-types';

import { UserProfileEditButton } from '../UserProfileEditButton';

import { TextInput } from '@components/Form/TextInput';

const UserProfileFormView = ({ userData }) => {
  const formikRef = useRef(null);

  return (
    <Formik
      ref={formikRef}
      initialValues={{
        name: userData.name,
        email: userData.email,
        password: 'Set a unique password to protect your Squad account.',
      }}
      // validate={validateForm.confirmSignUp}
      onSubmit={() => {}}
      render={({ errors, touched }) => (
        <Form>
          <Field
            type="text"
            name="name"
            placeholder="Enter your name"
            component={TextInput}
            label="Name"
            addClassLabel="label_settings"
            addClassWrapper="pt-8 pb-8"
            addClassInputContainer="form_background"
            addClassInput="default_input input_settings pt-2 pb-2 pl-3 pr-3"
            addClassFocusedInput="form_border_focus form_border_rounded"
            addClassBlurredInput="form_border form_border_rounded"
            maxLength={60}
          />
          {errors.name && touched.name && <div className="formik-error error-label">{errors.email}</div>}
          <Field
            type="text"
            name="email"
            component={TextInput}
            label="Email"
            addClassLabel="label_settings"
            addClassWrapper="pt-8 pb-3"
            addClassInputContainer="form_border_bottom form_border_gray"
            addClassInput="default_input input_settings pt-2 pb-2 pr-3"
            additionalElement={<UserProfileEditButton />}
          />
          <Field
            type="text"
            name="password"
            component={TextInput}
            label="Password"
            addClassLabel="label_settings"
            addClassWrapper="pt-3 pb-8"
            addClassInputContainer="form_border_bottom form_border_gray"
            addClassInput="default_input input_settings pt-2 pb-2 pr-3"
            additionalElement={<UserProfileEditButton />}
          />
        </Form>
      )}
    />
  );
};

UserProfileFormView.propTypes = {
  userData: PT.oneOfType([PT.object, PT.arrayOf(PT.object)]),
};

export default UserProfileFormView;
