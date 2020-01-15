import React, { useRef } from 'react';
import { Field, Form, Formik } from 'formik';
import PT from 'prop-types';

import style from '../../../UserProfile/_components/UserProfileForm/style.module.sass';

import s from './style.module.sass';
import { style as colorSelectStyle } from './color_select_style';

import OverlayBlocker from '@components/OverlayBlocker';
import { TextInput } from '@components/Form/TextInput';
import { validateField } from '@components/Form/validations';
import { Icon } from '@components/Icon';
import { ColorSelectFormik } from '@components/Form/Dropdown/ColorSelectFormik';
import { USER_COMMON } from '@config/common';

export const UserTeamsFormView = ({ initialValues, currentTeamId, isUserUpdating, updateSingleUserTeam }) => {
  const formikRef = useRef(null);
  const overlayzIndex = 2000;

  return (
    <Formik
      ref={formikRef}
      initialValues={initialValues}
      enableReinitialize="true"
      onSubmit={() => {}}
      render={({ errors, touched, values }) => (
        <Form>
          {values.name.length === 0 && <OverlayBlocker zIndex={overlayzIndex} />}
          <div className="flex">
            <div className={s.text_input}>
              <Field
                type="text"
                name="name"
                placeholder="Enter your name"
                component={TextInput}
                label="Team name"
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
                disabled={initialValues.statusName !== USER_COMMON.USER_ROLES.SUPER_ADMIN}
                customOnBlur={() =>
                  values.name !== initialValues.name &&
                  values.name.length !== 0 &&
                  updateSingleUserTeam({ ...values, teamId: currentTeamId })
                }
                additionalElement={
                  isUserUpdating ? (
                    <div className={style.spinner_container}>
                      <Icon iconName="spinner" className={style.spinner} />
                    </div>
                  ) : null
                }
              />
              <div style={{ height: 18 }} className="formik-error error-label pt-2">
                {errors.name && touched.name ? errors.name : ''}
              </div>
            </div>
            <div className={s.color_select}>
              <Field
                name="colorHex"
                component={ColorSelectFormik}
                inlineStyle={colorSelectStyle}
                statusName={initialValues.statusName}
                customOnChange={colorHex =>
                  updateSingleUserTeam({ name: values.name, teamId: currentTeamId, colorHex })
                }
              />
            </div>
          </div>
        </Form>
      )}
    />
  );
};

UserTeamsFormView.propTypes = {
  initialValues: PT.object,
  currentTeamId: PT.string,
  isUserUpdating: PT.bool,
  updateSingleUserTeam: PT.func,
};
