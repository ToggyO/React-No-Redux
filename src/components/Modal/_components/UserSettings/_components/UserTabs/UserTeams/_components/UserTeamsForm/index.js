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

export const UserTeamsFormView = ({ teams, currentTeamId, isUserUpdating, updateSingleUserTeam }) => {
  const formikRef = useRef(null);
  const overlayzIndex = 2000;

  const filteredTeam = teams.filter(item => item.teamId === currentTeamId);
  const initialValues = {};
  filteredTeam.forEach(item => {
    initialValues.name = item.team.name;
    initialValues.colorHex = item.team.colorHex;
  });

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
                customOnChange={colorHex =>
                  updateSingleUserTeam({ name: values.name, teamId: currentTeamId, colorHex })
                }
              />
            </div>
          </div>
          {/* TODO delete */}
          {/* <button */}
          {/*  type="button" */}
          {/*  onClick={e => { */}
          {/*    e.preventDefault(); */}
          {/*    console.log(values); */}
          {/*  }} */}
          {/* > */}
          {/*  Test */}
          {/* </button> */}
        </Form>
      )}
    />
  );
};

UserTeamsFormView.propTypes = {
  teams: PT.arrayOf(PT.object),
  currentTeamId: PT.string,
  isUserUpdating: PT.bool,
  updateSingleUserTeam: PT.func,
};
