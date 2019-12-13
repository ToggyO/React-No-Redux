import React, { useRef } from 'react';
import { Field, Form, Formik } from 'formik';
import PT from 'prop-types';

import { UserProfileEditButton } from '../UserProfileEditButton';

import s from './style.module.sass';

import { TextInput } from '@components/Form/TextInput';
import { Icon } from '@components/Icon';

const UserProfileFormView = ({ userData, isUserUpdating, updateUserData, modalOpen }) => {
  const formikRef = useRef(null);

  return (
    <Formik
      ref={formikRef}
      initialValues={{
        name: userData.name,
        userEmail: userData.email,
        userPassword: 'Set a unique password to protect your Squad account.',
      }}
      enableReinitialize="true"
      onSubmit={() => {}}
      render={({ errors, touched, values }) => (
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
            customOnBlur={() => values.name !== userData.name && updateUserData({ name: values.name })}
            additionalElement={
              isUserUpdating ? (
                <div className={s.spinner_container}>
                  <Icon iconName="spinner" className={s.spinner} />
                </div>
              ) : null
            }
          />
          {errors.name && touched.name && <div className="formik-error error-label">{errors.email}</div>}
          <Field
            type="text"
            name="userEmail"
            component={TextInput}
            label="Email"
            addClassLabel="label_settings"
            addClassWrapper="pt-8 pb-3"
            addClassInputContainer="form_border_bottom form_border_gray"
            addClassInput="default_input input_settings pt-2 pb-2 pr-3"
            additionalElement={<UserProfileEditButton onClick={() => modalOpen('ModalChangeEmail')} />}
            disabled
          />
          <Field
            type="text"
            name="userPassword"
            component={TextInput}
            label="Password"
            addClassLabel="label_settings"
            addClassWrapper="pt-3 pb-8"
            addClassInputContainer="form_border_bottom form_border_gray"
            addClassInput="default_input input_settings pt-2 pb-2 pr-3"
            additionalElement={<UserProfileEditButton onClick={() => modalOpen('ModalChangePassword')} />}
            disabled
          />
        </Form>
      )}
    />
  );
};

UserProfileFormView.propTypes = {
  userData: PT.oneOfType([PT.object, PT.arrayOf(PT.object)]),
  isUserUpdating: PT.bool,
  updateUserData: PT.func,
  modalOpen: PT.func,
};

export default UserProfileFormView;
