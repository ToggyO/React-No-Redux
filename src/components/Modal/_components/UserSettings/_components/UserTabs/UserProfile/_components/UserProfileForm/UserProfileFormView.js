import React, { useRef } from 'react';
import { Field, Form, Formik } from 'formik';
import PT from 'prop-types';

import { UserProfileEditButton } from '../UserProfileEditButton';

import { SignUpByGoogleMessage } from '../SignUpByGoogleMessage';

import s from './style.module.sass';

import { TextInput } from '@components/Form/TextInput';
import { Icon } from '@components/Icon';
import OverlayBlocker from '@components/OverlayBlocker';
import { validateField } from '@components/Form/validations';
import { DeleteButton } from '@components/StyledComponents/Buttons';
import { LOCAL_STORAGE_KEYS, OTHER } from '@config/common';
import { getFromState } from '@utils/index';

const UserProfileFormView = ({ userData, isUserUpdating, updateUserData, modalOpen }) => {
  const formikRef = useRef(null);
  const overlayzIndex = 2000;
  const getSignUpMethod = getFromState(LOCAL_STORAGE_KEYS.USER);

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
          {values.name.length === 0 && <OverlayBlocker zIndex={overlayzIndex} />}
          <Field
            type="text"
            name="name"
            placeholder="Enter your name"
            component={TextInput}
            label="Name"
            validate={validateField.name}
            wrapperStyle={{
              position: values.name.length === 0 ? 'relative' : 'static',
              zIndex: values.name.length === 0 ? overlayzIndex + 1 : 'auto',
            }}
            addClassLabel="label_settings"
            addClassWrapper="pt-8"
            addClassInputContainer="form_background"
            addClassInput="default_input input_settings pt-2 pb-2 pl-3 pr-3"
            addClassFocusedInput="form_border_focus form_border_rounded"
            addClassBlurredInput="form_border form_border_rounded"
            maxLength={60}
            customOnBlur={() =>
              values.name !== userData.name &&
              values.name.length !== 0 &&
              updateUserData({ name: values.name })
            }
            additionalElement={
              isUserUpdating ? (
                <div className={s.spinner_container}>
                  <Icon iconName="spinner" className={s.spinner} />
                </div>
              ) : null
            }
          />
          <div style={{ height: 18 }} className="formik-error error-label pt-2">
            {errors.name && touched.name ? errors.name : ''}
          </div>
          {getSignUpMethod.signUpBy === OTHER.SIGN_UP_BY.GOOGLE && <SignUpByGoogleMessage />}
          <Field
            type="text"
            name="userEmail"
            component={TextInput}
            label="Email"
            addClassLabel="label_settings"
            addClassWrapper={`${getSignUpMethod.signUpBy === OTHER.SIGN_UP_BY.EMAIL ? 'pt-9' : 'pt-2'} pb-3`}
            addClassInputContainer="form_border_bottom form_border_gray"
            addClassInput="default_input input_settings pt-2 pb-2 pr-3"
            additionalElement={
              getSignUpMethod.signUpBy === OTHER.SIGN_UP_BY.EMAIL && (
                <UserProfileEditButton onClick={() => modalOpen('ModalChangeEmail')} />
              )
            }
            disabled
          />
          {getSignUpMethod.signUpBy === OTHER.SIGN_UP_BY.EMAIL && (
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
          )}
          <div className={s.logout}>
            <DeleteButton
              type="button"
              className="btn rounded pt-2 pb-2"
              onClick={() => modalOpen('ModalLogoutConfirmation')}
            >
              Log out
            </DeleteButton>
            {/* TODO delete */}
            {/* <DeleteButton */}
            {/*  type="button" */}
            {/*  className="btn rounded pt-2 pb-2" */}
            {/*  onClick={() => modalOpen('ModalConfirmEmailChange')} */}
            {/* > */}
            {/*  TEST */}
            {/* </DeleteButton> */}
          </div>
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
