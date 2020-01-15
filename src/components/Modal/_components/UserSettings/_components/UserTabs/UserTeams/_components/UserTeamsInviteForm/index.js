import React, { useRef } from 'react';
import { Field, Form, Formik } from 'formik';
import PT from 'prop-types';

import style from '../../../UserProfile/_components/UserProfileForm/style.module.sass';

import s from './style.module.sass';

import { TextInput } from '@components/Form/TextInput';
import { validateField } from '@components/Form/validations';
import { Icon } from '@components/Icon';
import { PrimaryColorFilledButton } from '@components/StyledComponents/Buttons';

export const UserTeamsInviteForm = ({ isUserUpdating }) => {
  const formikRef = useRef(null);

  return (
    <Formik
      ref={formikRef}
      initialValues={{ email: '' }}
      onSubmit={values =>
        console.log({
          emails: [values.email],
        })
      }
    >
      {({ errors, touched }) => (
        <Form>
          <div className="flex pt-5">
            <div className="full_width">
              <Field
                type="email"
                name="email"
                placeholder="Enter an email address to invite…"
                component={TextInput}
                label="Email"
                validate={validateField.email}
                addClassLabel="label_settings"
                addClassInputContainer="form_background"
                addClassInput="default_input input_settings pt-2 pb-2 pl-3 pr-3"
                addClassFocusedInput="form_border_focus form_border_rounded"
                addClassBlurredInput="form_border form_border_rounded"
                maxLength={60}
                additionalElement={
                  isUserUpdating ? (
                    <div className={style.spinner_container}>
                      <Icon iconName="spinner" className={style.spinner} />
                    </div>
                  ) : null
                }
              />
              <div style={{ height: 18 }} className="formik-error error-label pt-2">
                {errors.email && touched.email ? errors.email : ''}
              </div>
            </div>
            <PrimaryColorFilledButton type="submit" className={`${s.button} btn rounded pt-3 pb-3 ml-6 mb-0`}>
              Invite new User
            </PrimaryColorFilledButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};

UserTeamsInviteForm.propTypes = {
  isUserUpdating: PT.bool,
};
